export const cistercianDecoder = (number) => {
  console.log(number);
  if(number > 9999 || number < 1){
    return 'Sorry number out of range, select a number between 1-9999';
  }

  const ones = {
    1: '_____\n|   _ |\n|  |  |\n|  |  |\n|  |  |\n|     |',
    2: '  |  \n  |  \n  |  ',
    3: '  |  \n  |  \n  |  ',
    4: '  |  \n  |  \n  |  ',
    5: '  |  \n  |  \n  |  ',
    6: '  |  \n  |  \n  |  ',
    7: '  |  \n  |  \n  |  ',
    8: '  |  \n  |  \n  |  ',
    9: '  |  \n  |  \n  |  ',
  };

  let cistercianNumber = ones[1];


  return cistercianNumber;
};
