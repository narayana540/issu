function Member() {
};
Member.member_id = ' ';
Member.name = ' ';
Member.technology = ''

Member.prototype.init = function (member_id, name,technology) {
  this.member_id = Number(member_id);
  this.name = name;
  this.technology = technology;
 }

Member.prototype.describe = function () {
  var description = '  ';
  description += ' Technology  = ';
  description += this.technology +','+'<br>' ;;
  description += ' Member Name = ';
  description += this.name +','+'<br>' ;;
return description;
}

