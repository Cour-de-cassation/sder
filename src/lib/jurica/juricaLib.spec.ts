import { juricaLib } from './juricaLib';

describe('juricaLib', () => {
  describe('cleanText', () => {
    it('should get rid of html tags', () => {
      const text = '<em>italic</em>, <p>paragraph</ p> and <br /> new line.';

      const cleanedText = juricaLib.cleanText(text);

      expect(cleanedText).toBe('italic, paragraph and new line.');
    });

    it('should transform new lines and carriage returns', () => {
      const text = 'Line 1\r\nLine 2\rLine 3';

      const cleanedText = juricaLib.cleanText(text);

      expect(cleanedText).toBe('Line 1\nLine 2\nLine 3');
    });

    it('should remove extra spaces', () => {
      const text = 'Test with \\t\t\\f\fmultiple            spaces';

      const cleanedText = juricaLib.cleanText(text);

      expect(cleanedText).toBe('Test with multiple spaces');
    });

    it('should throw if the parameter is not a string', async () => {
      expect(() => juricaLib.cleanText(0 as unknown as string)).toThrow('juricaLib.cleanText: text must be a string.');
    });

    it('should throw if the parameter is an empty string', async () => {
      expect(() => juricaLib.cleanText('')).toThrow(
        'juricaLib.cleanText: empty text, the document could be malformed or corrupted.',
      );
    });
  });
});
