module.exports = function toReadable (number) {
  if(number == 0) {
      return 'zero';
  }

  let Units = { 0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
  let Dozens = { 0: '', 1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' }
  let Dozen = { 10: 'ten',  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'  }
  
  if(number < 10) {
      return Units[number];
  }

  let isDozen = (number % 100) > 10 && (number % 100) < 20;

  let buf = '';
  if(isDozen) {
      buf = Dozen[number % 100];
  }


  let units = number % 10;
  let dozens = Math.floor(number / 10) % 10;
  let hundreds = Math.floor(number / 100)  % 10;

  let res = [];

  if(hundreds) {
      res.push(Units[hundreds] + ' hundred');
  }

  if(buf.length) {
      res.push(buf);
      return res.join(' ');
  }

  if(dozens) {
      res.push(Dozens[dozens]);
  }

  if(units) {
      res.push(Units[units]);
  }

  return res.join(' ');
}