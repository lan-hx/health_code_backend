
use('mongodbQRCodeDB');

let cnt = 1;

// inser some users into the table
db.getCollection('Users').insertMany([
    {"_id":new ObjectId(cnt++), "u_name":"dd", "u_card_id":"123456789012345678","u_phone":"12345679635", "u_email":"123@163.com","health_code":new ObjectId(cnt++), "health_state":"green"},
    {"_id":new ObjectId(cnt++), "u_name":"bb", "u_card_id":"123456789012345679","u_phone":"12345679636", "u_email":"456@163.com","health_code":new ObjectId(cnt++), "health_state":"green"},
    {"_id":new ObjectId(cnt++), "u_name":"cc", "u_card_id":"123456789012345670","u_phone":"12345679637", "u_email":"789@163.com","health_code":new ObjectId(cnt++), "health_state":"green"}
]);

// insert some administors into the table
db.getCollection('Admins').insertMany([
    {"_id":new ObjectId(cnt++), "m_name":"aa", "m_password":"123456789012345678","m_access":"ROOT"},
    {"_id":new ObjectId(cnt++), "m_name":"bb", "m_password":"123456789012345679","m_access":"SUPER"},
]);

