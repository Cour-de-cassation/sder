import { convertOccultationBlockInCategoriesToOmit } from './convertOccultationBlockToCategoriesToOmit';

describe('convertOccultationBlockInCategoriesToOmit', () => {
  it('should return categories for block 1', () => {
    const categoriesToOmit = convertOccultationBlockInCategoriesToOmit(1);

    expect(categoriesToOmit.sort()).toEqual(['professionnelMagistratGreffier'].sort());
  });

  it('should return categories for block 2', () => {
    const categoriesToOmit = convertOccultationBlockInCategoriesToOmit(2);

    expect(categoriesToOmit.sort()).toEqual(
      ['professionnelMagistratGreffier', 'dateNaissance', 'dateMariage', 'dateDeces'].sort(),
    );
  });

  it('should return categories for block 3', () => {
    const categoriesToOmit = convertOccultationBlockInCategoriesToOmit(3);

    expect(categoriesToOmit.sort()).toEqual(
      ['professionnelMagistratGreffier', 'personneMorale', 'numeroSiretSiren'].sort(),
    );
  });

  it('should return categories for block 4', () => {
    const categoriesToOmit = convertOccultationBlockInCategoriesToOmit(4);

    expect(categoriesToOmit.sort()).toEqual(
      [
        'professionnelMagistratGreffier',
        'dateNaissance',
        'dateMariage',
        'dateDeces',
        'personneMorale',
        'numeroSiretSiren',
      ].sort(),
    );
  });

  it('should return categories for block null', () => {
    const categoriesToOmit = convertOccultationBlockInCategoriesToOmit(undefined);

    expect(categoriesToOmit.sort()).toEqual(
      ['professionnelMagistratGreffier', 'personneMorale', 'numeroSiretSiren'].sort(),
    );
  });
});
