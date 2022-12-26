// Help Grinch steal Christmas from JS programmers
Date.prototype.getDate = function getGrinchDate() {
    let dateString = this.toDateString();
    let month = dateString.substr(4, 3);
    let day = parseInt(dateString.substr(8, 2));
    return month == 'Dec' && day == 25 ? 26 : day;
  }

  let d = new Date('1957-10-25');
  console.log(d.getDate(), 25);
  d = new Date('1957-12-12');
  console.log(d.getDate(), 12);
  d = new Date('1957-12-25');
  console.log(d.getDate(), 26);