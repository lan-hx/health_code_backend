
use('mongodbQRCodeDB');

db.Users.drop();
db.Admins.drop();
db.Places.drop();
db.QRCodes.drop();
db.Vaccination.drop();
db.Nucleic.drop();
db.VisitPlace.drop();
db.BookVaccination.drop();
db.Complain.drop();
db.Tokens.drop();

console.log("All tables dropped!");
