export { convertOccultationBlockInCategoriesToOmit };

function convertOccultationBlockInCategoriesToOmit(occultationBlock: number | undefined) {
  const categoriesToOmit = ['professionnelMagistratGreffier'];
  if (occultationBlock !== undefined && occultationBlock >= 1 && occultationBlock <= 4) {
    switch (occultationBlock) {
      case 2:
        categoriesToOmit.push('dateNaissance', 'dateMariage', 'dateDeces');
        break;
      case 3:
        categoriesToOmit.push('personneMorale', 'numeroSiretSiren');
        break;
      case 4:
        categoriesToOmit.push('dateNaissance', 'dateMariage', 'dateDeces', 'personneMorale', 'numeroSiretSiren');
        break;
    }
  } else {
    categoriesToOmit.push('personneMorale', 'numeroSiretSiren');
  }
  return categoriesToOmit;
}
