import { jurinetLib } from './jurinetLib';

describe('jurinetLib', () => {
  describe('cleanText', () => {
    it('should clean a text (general case)', async () => {
      const xml = buildJurinetXml([
        '<a href="URL"> TEXT1 </a> <br/> <b class="CLASS"> TEXT2 </b>',
        '<i class="CLASS"> TEXT3 </i> <hr/> <u class="CLASS"> TEXT4 </u>',
        '<em class="CLASS"> <strong class="CLASS"> TEXT5 </strong> \r\n <font class="CLASS"> <span class="CLASS"> TEXT6 </span> </font></em>',
        '<p class="CLASS"> TEXT7 </p> <h1 class="CLASS"> TEXT8 </h1> TEXT9',
        'TEXT10 \r\r\n\r\n\t\f\\t\t\\f <TEXT11> & &#',
      ]);

      const cleanedText = jurinetLib.cleanText(xml);

      expect(cleanedText).toEqual(
        '<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2 TEXT3 \n TEXT4 TEXT5 \n TEXT6 TEXT7 \n TEXT8 \n TEXT9 TEXT10 \n\n\n &lt;TEXT11&gt; &amp; &#</TEXTE_ARRET>',
      );
    });

    describe('assertions', () => {
      it('should throw if the parameter is not a string', async () => {
        expect(() => jurinetLib.cleanText(0 as unknown as string)).toThrow(
          'jurinetLib.cleanText: text must be a string.',
        );
      });

      it('should throw if the parameter is not in a text_arret', async () => {
        expect(() => jurinetLib.cleanText('Text of decision')).toThrow(
          'jurinetLib.cleanText: <TEXTE_ARRET> tag not found or incomplete, the document could be malformed or corrupted.',
        );
      });

      it('should throw if the parameter is all the text_arrets are empty', async () => {
        expect(() => jurinetLib.cleanText(buildJurinetXml(['', '\t']))).toThrow(
          'jurinetLib.cleanText: empty text, the document could be malformed or corrupted.',
        );
      });

      it('should throw if there header is not valid', async () => {
        expect(() =>
          jurinetLib.cleanText(buildJurinetXml(['TEXT1 TEXT2'], '<INVALID_HEADER></INVALID_HEADER>')),
        ).toThrow(
          'jurinetLib.cleanText: End of <CAT_PUB> or <LIEN_WWW> tag not found, the document could be malformed or corrupted.',
        );
      });
    });

    describe('headers', () => {
      it('should return a cleaned decision text with a LIEN_WWW header before <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 TEXT2'], '<LIEN_WWW></LIEN_WWW>');

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<LIEN_WWW></LIEN_WWW><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should clean all the xml special character < and > outside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(
          ['TEXT1 TEXT2'],
          ' < BEFORE_HEADER <LIEN_WWW> HEADER1 < HEADER2 > HEADER3 </LIEN_WWW>',
        );

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual(
          '&lt; BEFORE_HEADER <LIEN_WWW> HEADER1 &lt; HEADER2 &gt; HEADER3 </LIEN_WWW><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>',
        );
      });

      it('should clean all the xml special character & and &# outside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(
          ['TEXT1 TEXT2'],
          '& BEFORE_HEADER <LIEN_WWW> HEADER1 & HEADER2 &# HEADER3 </LIEN_WWW>',
        );

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual(
          '&amp; BEFORE_HEADER <LIEN_WWW> HEADER1 &amp; HEADER2 &# HEADER3 </LIEN_WWW><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>',
        );
      });

      it('should serialize all the numpourvoi in the header', async () => {
        const xml = buildJurinetXml(
          ['TEXT1 TEXT2'],
          '<numpourvoi id="1">1</numpourvoi><numpourvoi id="2">2</numpourvoi><LIEN_WWW></LIEN_WWW>',
        );

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual(
          '<numpourvoi id="1">1,2</numpourvoi><LIEN_WWW></LIEN_WWW><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>',
        );
      });
    });

    describe('TEXTE_ARRET cleaning', () => {
      it('should remove the <br/> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <br/> TEXT2', 'TEXT3 <br/> TEXT4']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2 TEXT3 \n TEXT4</TEXTE_ARRET>');
      });

      it('should remove the <hr/> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <hr/> TEXT2', 'TEXT3 <hr/> TEXT4']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2 TEXT3 \n TEXT4</TEXTE_ARRET>');
      });

      it('should remove the <a> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <a href="URL"> TEXT2 </a>']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should remove the <b> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <b class="CLASS"> TEXT2 </b>']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should remove the <i> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <i class="CLASS"> TEXT2 </i>']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should remove the <u> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <u class="CLASS"> TEXT2 </u>']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should remove the <em> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <em class="CLASS"> TEXT2 </em>']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should remove the <strong> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <strong class="CLASS"> TEXT2 </strong>']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should remove the <font> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <font class="CLASS"> TEXT2 </font>']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should remove the <span> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <span class="CLASS"> TEXT2 </span>']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should remove the <p> inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 <p class="CLASS"> TEXT2 </p> TEXT3']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2 \n TEXT3</TEXTE_ARRET>');
      });

      it('should remove the <h%d> inside the <TEXTE_ARRET>', async () => {
        const titleNumberCategory = Math.floor(Math.random() * 5) + 1;
        const xml = buildJurinetXml([
          `TEXT1 <h${titleNumberCategory} class="CLASS"> TEXT2 </h${titleNumberCategory}> TEXT3`,
        ]);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2 \n TEXT3</TEXTE_ARRET>');
      });

      it('should replace the newline \\r\\n by \\n inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 \r\n TEXT2']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2</TEXTE_ARRET>');
      });

      it('should replace the newline \\r by \\n inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 \r TEXT2']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n TEXT2</TEXTE_ARRET>');
      });

      it('should replace the newline \\r\\r\\n by \\n\\n inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1 \r\r\n TEXT2']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 \n\n TEXT2</TEXTE_ARRET>');
      });

      it('should remove the tabulation \\t inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1\t\tTEXT2']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1TEXT2</TEXTE_ARRET>');
      });

      it('should remove ill formed tabulation \\\\t inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1\\t\\tTEXT2']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1TEXT2</TEXTE_ARRET>');
      });

      it('should remove the page break \\f inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1\f\fTEXT2']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1TEXT2</TEXTE_ARRET>');
      });

      it('should remove ill formed page break \\\\f inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1\\f\\fTEXT2']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1TEXT2</TEXTE_ARRET>');
      });

      it('should replace multiple space by single space inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['TEXT1   TEXT2']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>TEXT1 TEXT2</TEXTE_ARRET>');
      });

      it('should format well the & character inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['&TEXT1']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&amp;TEXT1</TEXTE_ARRET>');
      });

      it('should keep the &amp; inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['&amp;TEXT1']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&amp;TEXT1</TEXTE_ARRET>');
      });

      it('should convert the &amp;# into &# inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['&amp;#TEXT1']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&#TEXT1</TEXTE_ARRET>');
      });

      it('should format well the < character inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['<TEXT1']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&lt;TEXT1</TEXTE_ARRET>');
      });

      it('should format well the > character inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['>TEXT1']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&gt;TEXT1</TEXTE_ARRET>');
      });

      it('should conserve the < and > for data inside the <TEXTE_ARRET>', async () => {
        const xml = buildJurinetXml(['<TEXT1>']);

        const cleanedText = jurinetLib.cleanText(xml);

        expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&lt;TEXT1&gt;</TEXTE_ARRET>');
      });

      describe('WEIRD CASE', () => {
        it('should conserve the opening html balise without parameters but not the closing one inside the <TEXTE_ARRET>', async () => {
          const xml = buildJurinetXml(['<p> TEXT1 </p>']);

          const cleanedText = jurinetLib.cleanText(xml);

          expect(cleanedText).toEqual('<CAT_PUB></CAT_PUB><TEXTE_ARRET>&lt;p&gt; TEXT1</TEXTE_ARRET>');
        });
      });
    });
  });
});

function buildJurinetXml(textArrets: string[], header = '<CAT_PUB></CAT_PUB>') {
  const textArretsWithTags = textArrets.map((textArret) => `<TEXTE_ARRET>${textArret}</TEXTE_ARRET>`);
  const xmlDocument = `${header}${textArretsWithTags.join('')}`;

  return xmlDocument;
}
