export const cistercianDecoder = (number) => {
  console.log(number);
  if(number > 9999 || number < 1){
    return 'Sorry number out of range, select a number between 1-9999';
  }
  //add leading zeros
  while(number.length != 4){
    number = '0' + number;
  }

  const [digitFour, digitThree, digitTwo, digitOne] = number.split('');

  console.log(digitOne, digitThree);
  
  const ones = {
    0: [
      ['&nbsp', '&nbsp'],
      ['&nbsp', '&nbsp']
    ],
    1: [
      ['_', '&nbsp'],
      ['&nbsp', '&nbsp']
    ],
    2: [
      ['&nbsp', '&nbsp'],
      ['_', '&nbsp']
    ],
    3: [
      ['&nbsp', '&nbsp'],
      ['\\', '&nbsp']
    ],
    4: [
      ['&nbsp', '&nbsp'],
      ['/', '&nbsp']
    ],
    5: [
      ['_', '&nbsp'],
      ['/', '&nbsp']
    ],
    6: [
      ['&nbsp', '&nbsp'],
      ['&nbsp', '|']
    ],
    7: [
      ['_', '&nbsp'],
      ['&nbsp', '|']
    ],
    8: [
      ['&nbsp', '&nbsp'],
      ['_', '|']
    ],
    9: [
      ['_', '&nbsp'],
      ['_', '|']
    ],
  };

  //flip on vertical axis and replace slashes
  const vertAxisFlip = (tuple) => {
    const changeSlashes = tuple.map(line => line.map(char => {
      if(char === '/') {
        return '\\';
      }
      if(char === '\\') {
        return '/';
      }
      return char;
    }));

    const vertFlip = changeSlashes.map(line => line.reverse());
    console.log(vertFlip);
    return vertFlip;
  };

  const tens = {
    0: vertAxisFlip(ones[digitTwo]),
    1: vertAxisFlip(ones[digitTwo]),
    2: vertAxisFlip(ones[digitTwo]),
    3: vertAxisFlip(ones[digitTwo]),
    4: vertAxisFlip(ones[digitTwo]),
    5: vertAxisFlip(ones[digitTwo]),
    6: vertAxisFlip(ones[digitTwo]),
    7: vertAxisFlip(ones[digitTwo]),
    8: vertAxisFlip(ones[digitTwo]),
    9: vertAxisFlip(ones[digitTwo])
  };

  //horizontal axis flip
  const horAxisFlip = (tuple) => {
    const horizontalFlip = tuple.reverse();
    return horizontalFlip;
  };

  //flip along horizontal axis
  const hundreds = {
    0: horAxisFlip(ones[digitThree]),
    1: horAxisFlip(ones[digitThree]),
    2: horAxisFlip(ones[digitThree]),
    3: horAxisFlip(ones[digitThree]),
    4: horAxisFlip(ones[digitThree]),
    5: horAxisFlip(ones[digitThree]),
    6: horAxisFlip(ones[digitThree]),
    7: horAxisFlip(ones[digitThree]),
    8: horAxisFlip(ones[digitThree]),
    9: horAxisFlip(ones[digitThree])
  };

  //flip on horizontal and vertical axis replace slashes
  const thousands = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  };

  const upperSymbol = [
    ['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp'],
    ['&nbsp', '&nbsp', '|', '&nbsp', '&nbsp']
  ];

  const lowerSymbol = [
    ['&nbsp', '&nbsp', '|', '&nbsp', '&nbsp'],
    ['&nbsp', '&nbsp', '&nbsp', '&nbsp', '&nbsp']
  ];

  //splice the ones place
  for(let i = 0; i < upperSymbol.length; i++){
    for(let j = 3; j < upperSymbol[i].length; j++){
      upperSymbol[i].splice(j, 1, ones[digitOne][i][j - 3]);
    }
  }
  
  //splice the tens place
  for(let i = 0; i < upperSymbol.length; i++){
    for(let j = 0; j < 2; j++){
      upperSymbol[i].splice(j, 1, tens[digitTwo][i][j]);
    }
  }

  //splice the hundreds place



  //create string for ones/tens
  const upperJoinedLines = upperSymbol.map(line => line.join(''));
  upperJoinedLines.splice(1, 0, '<br>');
  const fullJoinUpper = upperJoinedLines.join('');
  console.log(upperJoinedLines, fullJoinUpper);

  //create string for hunds/thous
  const lowerJoinedLines = lowerSymbol.map(line => line.join(''));
  lowerJoinedLines.splice(1, 0, '<br>');
  const fullJoinLower = lowerJoinedLines.join('');

  //final string
  const cistercianNumber = `${fullJoinUpper}<br>&nbsp&nbsp|&nbsp&nbsp<br>${fullJoinLower}`;
  return cistercianNumber;
};
