import { jurinetLib } from './jurinetLib';

describe('jurinetLib', () => {
  describe('cleanText', () => {
    it('should throw if the parameter is not a string', async () => {
      expect(() => jurinetLib.cleanText((0 as unknown) as string)).toThrow(
        'jurinetLib.cleanText: text must be a string.',
      );
    });
  });
});
