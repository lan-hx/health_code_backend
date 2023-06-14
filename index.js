const http = require('http');
const querystring = require('querystring');
const {MongoClient, ObjectId} = require("mongodb");
const {getDistance} = require('geolib');
const express = require('express');
const { connect } = require('http2');
const app = express();
    
// Replace the uri string with your connection string.
const config = require('./config/config.json');

// "uri":"mongodb://host.docker.internal:27017",    
const uri = config.uri;
const client = new MongoClient(uri);
const database = client.db('mongodbQRCodeDB');
let POST;

const connect_number = config.connect_port;

const result = {
  errno: 0,
  data: [
    {user: '张三', content: '留言1'},
    {user: '李四', content: '留言2'}
  ]
}

const buffers = [];

app.post('/LoginUser', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = LoginUser(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }

});



app.post('/GetHealthCodeStatus', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetHealthCodeStatus(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetUserInfo', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetUserInfo(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetTests', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetTests(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetNotifications', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetNotifications(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/GetTestStationList', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetTestStationList(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetHealthCodeComplainList', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetHealthCodeComplainList(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetVaccinumList', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetVaccinumList(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});
app.post('/GetVaccinumAppointmentAddress', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetVaccinumAppointmentAddress(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetVaccinumAppointmentState', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetVaccinumAppointmentState(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/ScanLocationCode', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = ScanLocationCode(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/SetUserInfo', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = SetUserInfo(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/HealthCodeComplain', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = HealthCodeComplain(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/AppointVaccinum', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = AppointVaccinum(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/VaccinumAppointRetract', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = VaccinumAppointRetract(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetHealthCode', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetHealthCode(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/SetHealthCode', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = SetHealthCode(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetUserAll', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetUserAll(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/SetUser', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = SetUser(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/AddUser', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = AddUser(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/DeleteUser', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = DeleteUser(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetStatisticsData', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetStatisticsData(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetHealthCodeAll', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetHealthCodeAll(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetVisitPlacesAll', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetVisitPlacesAll(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetVisitPlaces', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetVisitPlaces(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/AddVisitPlaces', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = AddVisitPlaces(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/DeleteVisitPlaces', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = DeleteVisitPlaces(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/GetVaccinationAll', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetVaccinationAll(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetVaccination', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetVaccination(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/AddVaccination', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = AddVaccination(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/DeleteVaccination', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = DeleteVaccination(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/GetPlacesAll', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetPlacesAll(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/GetPlaces', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetPlaces(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/AddPlaces', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = AddPlaces(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/DeletePlaces', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = DeletePlaces(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/SetPlaces', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = SetPlaces(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/SetVaccination', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = SetVaccination(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/GetNucleicAll', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetNucleicAll(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/GetNucleic', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetNucleic(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/SetNucleic', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = SetNucleic(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/AddNucleic', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = AddNucleic(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/DeleteNucleic', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = DeleteNucleic(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/GetAdminUserAll', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetAdminUserAll(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/GetAdminUser', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = GetAdminUser(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/SetAdminUser', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = SetAdminUser(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});


app.post('/AddAdminUser', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = AddAdminUser(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.post('/DeleteAdminUser', (req, res) =>{
  let str = '';
  const i = 0;

  {
    POST = querystring.parse(req.body);
    const result = DeleteAdminUser(POST).then((response) => {
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(response));
    });
  }
});

app.listen(connect_number,()=>{ console.log('listening to port:', connect_number)});



// async function get_data(POST) {
//   switch (POST.apiname) {
//     case 'LoginUser':
//       let RET = await LoginUser(POST);
//       return RET;
//       break;
//     case 'GetHealthCodeStatus':
//       RET = await GetHealthCodeStatus(POST);
//       return RET;
//       break;
//     case 'GetUserInfo':
//       RET = await GetUserInfo(POST);
//       return RET;
//       break;
//     case 'GetTests':
//       RET = await GetTests(POST);
//       return RET;
//       break;
//     case 'GetNotifications':
//       RET = await GetNotifications(POST);
//       return RET;
//       break;
//     case 'GetTestStationList':
//       RET = await GetTestStationList(POST);
//       return RET;
//       break;
//     case 'GetHealthCodeComplainList':
//       RET = await GetHealthCodeComplainList(POST);
//       return RET;
//       break;
//     case 'GetVaccinumList':
//       RET = await GetVaccinumList(POST);
//       return RET;
//     case 'GetVaccinumAppointmentAddress':
//       RET = await GetVaccinumAppointmentAddress(POST);
//       return RET;
//       break;
//     case 'GetVaccinumAppointmentState':
//       RET = await GetVaccinumAppointmentState(POST);
//       return RET;
//       break;
//     case 'ScanLocationCode':
//       RET = await ScanLocationCode(POST);
//       break;
//     case 'SetUserInfo':
//       RET = await SetUserInfo(POST);
//       return RET;
//       break;
//     case 'HealthCodeComplain':
//       RET = await HealthCodeComplain(POST);
//       return RET;
//       break;
//     case 'AppointVaccinum':
//       RET = await AppointVaccinum(POST);
//       return RET;
//       break;
//     case 'VaccinumAppointRetract':
//       RET = await VaccinumAppointRetract(POST);
//       return RET;
//       break;
//     case 'GetHealthCode':
//       RET = await GetHealthCode(POST);
//       return RET;
//       break;
//     case 'SetHealthCode':
//       RET = await SetHealthCode(POST);
//       return RET;
//       break;
//     case 'GetUserAll':
//       RET = await GetUserAll(POST);
//       return RET;
//       break;
//     case 'SetUser':
//       RET = await SetUser(POST);
//       return RET;
//       break;
//     case 'AddUser':
//       RET = await AddUser(POST);
//       return RET;
//       break;
//     case 'DeleteUser':
//       RET = await DeleteUser(POST);
//       return RET;
//       break;
//     case 'GetStatisticsData':
//       RET = GetStatisticsData(POST);
//       return RET;
//       break;
//     case 'GetHealthCodeAll':
//       RET = await GetHealthCodeAll(POST);
//       return RET;
//       break;
//     case 'GetVisitPlacesAll':
//       RET = await GetVisitPlacesAll(POST);
//       return RET;
//       break;
//     case 'GetVisitPlaces':
//       RET = await GetVisitPlaces(POST);
//       return RET;
//       break;
//     case 'AddVisitPlaces':
//       RET = await AddVisitPlaces(POST);
//       return RET;
//       break;
//     case 'DeleteVisitPlaces':
//       RET = await DeleteVisitPlaces(POST);
//       return RET;
//       break;
//     case 'GetVaccinationAll':
//       RET = await GetVaccinationAll(POST);
//       return RET;
//       break;
//     case 'GetVaccination':
//       RET = await GetVaccination(POST);
//       return RET;
//       break;
//     case 'AddVaccination':
//       RET = await AddVaccination(POST);
//       return RET;
//       break;
//     case 'DeleteVaccination':
//       RET = await DeleteVaccination(POST);
//       return RET;
//       break;
//     case 'GetPlacesAll':
//       RET = await GetPlacesAll(POST);
//       return RET;
//       break;
//     case 'GetPlaces':
//       RET = await GetPlaces(POST);
//       return RET;
//       break;
//     case 'AddPlaces':
//       RET = await AddPlaces(POST);
//       return RET;
//       break;
//     case 'DeletePlaces':
//       RET = await DeletePlaces(POST);
//       return RET;
//       break;
//     case 'SetPlaces':
//       RET = await SetPlaces(POST);
//       return RET;
//     case 'GetVaccinationAll':
//       RET = await GetVaccinationAll(POST);
//       return RET;
//       break;
//     case 'GetVaccination':
//       RET = await GetVaccination(POST);
//       return RET;
//       break;
//     case 'AddVaccination':
//       RET = await AddVaccination(POST);
//       return RET;
//       break;
//     case 'SetVaccination':
//       RET = await SetVaccination(POST);
//       return RET;
//       break;
//     case 'DeleteVaccination':
//       RET = await DeleteVaccination(POST);
//       return RET;
//       break;
//     case 'GetNucleicAll':
//       RET = await GetNucleicAll(POST);
//       return RET;
//       break;
//     case 'GetNucleic':
//       RET = await GetNucleic(POST);
//       return RET;
//       break;
//     case 'SetNucleic':
//       RET = await SetNucleic(POST);
//       return RET;
//       break;
//     case 'AddNucleic':
//       RET = await AddNucleic(POST);
//       return RET;
//       break;
//     case 'DeleteNucleic':
//       RET = await DeleteNucleic(POST);
//       return RET;
//       break;
//     case 'GetAdminUserAll':
//       RET = await GetAdminUserAll(POST);
//       return RET;
//       break;
//     case 'GetAdminUser':
//       RET = await GetAdminUser(POST);
//       return RET;
//       break;
//     case 'SetAdminUser':
//       RET = await SetAdminUser(POST);
//       return RET;
//       break;
//     case 'AddAdminUser':
//       RET = await AddAdminUser(POST);
//       return RET;
//       break;
//     case 'DeleteAdminUser':
//       RET = await DeleteAdminUser(POST);
//       return RET;
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }
// }

async function LoginUser(POST) {
  try {
    const userCollection = database.collection('Users');
    const tokenCollection = database.collection('Tokens');

    // Find the user based on name and card ID
    const query = {u_name: POST.name, u_card_id: POST.card_id};
    const user = await userCollection.findOne(query);

    if (!user) {
      return {
        error: 1,
        message: 'User not found'
      };
    }

    // Generate a new token
    // const ObjectId = require('mongodb').ObjectId;
    const token = new ObjectId();

    // Update or insert the token
    const tokenQuery = {u_id: user._id};
    const tokenUpdate = {$set: {token: token.toHexString(), time: new Date()}};
    const options = {upsert: true};
    await tokenCollection.updateOne(tokenQuery, tokenUpdate, options);

    return {
      error: 0,
      message: 'Login successful',
      uid: user._id,
      token: token.toHexString(),
      name: user.u_name,
      card_id: user.u_card_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function GetHealthCodeStatus(POST) {
  try {
    const isValidToken = await verifyToken(POST?.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = database.collection('Users');
    const tokenCollection = database.collection('Tokens');
    const query = {token: POST.token};
    const tokeninfo = await tokenCollection.findOne(query);
    if (!tokeninfo) {
      return {
        error: 1,
        message: 'Token not found'
      };
    }

    const userInfo = await userCollection.findOne({_id: tokeninfo.u_id});

    if (!userInfo) {
      return {
        error: 1,
        message: 'User not found'
      };
    }

    const nucleicCollection = database.collection('Nucleic');
    const nuclequery = {u_id: userInfo._id}
    const nucleicInfo = await nucleicCollection.findOne(nuclequery);

    if (!nucleicInfo) {
      return {
        error: 1,
        message: 'Nucleic not found'
      };
    } else {
      return {
        error: 0,
        health_code_status: userInfo.health_code,
        card_id: userInfo.u_card_id,
        latest_test: {
          test_time: nucleicInfo.time,
          test_result: nucleicInfo.kind
        }
      };
    }
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function GetUserInfo(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = database.collection('Users');
    const tokenCollection = await database.collection("Tokens");
    // const tokeninfo = tokenCollection.findOne({_id:new ObjectId(POST.token)});
    const query = {token: POST.token};
    const tokeninfo = await tokenCollection.findOne(query);

    const userInfo = await userCollection.findOne({_idn: tokeninfo.u_idn});

    if (!userInfo) {
      return {
        error: 1,
        message: 'User not found'
      };
    }

    return {
      error: 0,
      message: 'User information retrieved successfully',
      user_info: userInfo
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function GetTests(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = await database.collection('Users');
    const tokenCollection = await database.collection("Tokens");
    // const tokeninfo = tokenCollection.findOne({_id:new ObjectId(POST.token)});
    const query = {token: POST.token};
    const tokeninfo = await tokenCollection.findOne(query);

    const userInfo = await userCollection.findOne({_id: tokeninfo.u_id});
    if (!userInfo) {
      return {
        error: 1,
        message: 'User not found'
      };
    }

    const nucleicCollection = await database.collection('Nucleic');
    const nucleicInfo = await nucleicCollection.find({u_id: userInfo._id}).toArray();
    return {
      error: 0,
      content: nucleicInfo
    }
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }


}

async function GetNotifications(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = await database.collection('Users');
    const tokenCollection = await database.collection("Tokens");
    // const tokeninfo = tokenCollection.findOne({_id:new ObjectId(POST.token)});
    const query = {token: POST.token};
    const tokeninfo = await tokenCollection.findOne(query);
    const userInfo = await userCollection.findOne({_id: tokeninfo.u_id});
    if (!userInfo) {
      return {
        error: 1,
        message: 'User not found'
      };
    }

    const nucleicCollection = await database.collection('Nucleic');
    const nucleicInfo = await nucleicCollection.find({u_id: userInfo._id}).toArray();
    const CurrentTime = new Date();
    let send_notification = true;
    for (let i = 0; i < nucleicInfo.length; i++) {
      //3 days
      if (CurrentTime - nucleicInfo[i].time < 60 * 60 * 24 * 3) {
        send_notification = false;
      }
    }

    return {
      error: 0,
      status: send_notification
    }

  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }

}

async function GetTestStationList() {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const placeCollection = await database.collection('Places');
    // const {getDistance} = require('geolib');
    const testplaces = await placeCollection.find({kind: "nucleic"}).toArray();
    testplaces.sort(function (a, b) {
      return getDistance(
        {latitude: a.p_addr.latitude, longitude: a.p_addr.longitude},
        {latitude: POST.latitude, longitude: POST.longitude}
      ) - getDistance(
        {latitude: b.p_addr.latitude, longitude: b.p_addr.longitude},
        {latitude: POST.latitude, longitude: POST.longitude}
      );
    });

    return {
      error: 0,
      content: testplaces.slice(0, POST.num)
    }
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }

}

async function GetHealthCodeComplainList() {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = await database.collection('Users');
    const tokenCollection = await database.collection("Tokens");
    // const tokeninfo = tokenCollection.findOne({_id:new ObjectId(POST.token)});
    const query = {token: POST.token};
    const tokeninfo = await tokenCollection.findOne(query);
    const userInfo = await userCollection.findOne({_id: tokeninfo.u_id});
    if (!userInfo) {
      return {
        error: 1,
        message: 'User not found'
      };
    }

    const complainCollection = await database.collection('Complain');
    const complainInfo = await complainCollection.find({u_id: userInfo._id}, {
      "_id": 1,
      "content": 1,
      "reply": 1
    }).toArray();
    return {
      error: 0,
      content: complainInfo
    }

  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function GetVaccinumList() {
  const isValidToken = await verifyToken(POST.token);
  if (!isValidToken) {
    return {
      error: 1,
      message: 'Invalid token'
    };
  }

  const userCollection = await database.collection('Users');
  const tokenCollection = await database.collection("Tokens");
  // const tokeninfo = tokenCollection.findOne({_id:new ObjectId(POST.token)});
  const query = {token: POST.token};
  const tokeninfo = await tokenCollection.findOne(query);
  const userInfo = await userCollection.findOne({_id: tokeninfo.u_id});
  if (!userInfo) {
    return {
      error: 1,
      message: 'User not found'
    };
  }

  const vaccinationCollection = await database.collection('Vaccination');
  const vaccinationInfo = await vaccinationCollection.find({u_id: userInfo._id}).toArray();

  return {
    error: 0,
    content: vaccinationInfo
  }
}

async function GetVaccinumAppointmentAddress() {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }
    const placeCollection = await database.collection('Places');
    const vaccplaces = await placeCollection.find({kind: "vaccination"}).toArray();
    vaccplaces.sort(function (a, b) {
      return getDistance(
        {latitude: a.p_addr.latitude, longitude: a.p_addr.longitude},
        {latitude: POST.latitude, longitude: POST.longitude}
      ) - getDistance(
        {latitude: b.p_addr.latitude, longitude: b.p_addr.longitude},
        {latitude: POST.latitude, longitude: POST.longitude}
      );
    });


    return {
      error: 0,
      content: vaccplaces.slice(0, POST.num)
    }


  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function GetVaccinumAppointmentState(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }
    const vaccinationCollection = await database.collection('Vaccination');
    const vaccinationInfo = await vaccinationCollection.find({_id: (POST._id)}).toArray();

    return {
      error: 0,
      content: vaccinationInfo.slice(POST.offset, POST.offset + POST.num)
    }
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }

}

async function ScanLocationCode() {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = await database.collection('Users');
    const tokenCollection = await database.collection("Tokens");
    // const tokeninfo = tokenCollection.findOne({_id:ObjectId(POST.token)});
    const query = {token: POST.token};
    const tokeninfo = await tokenCollection.findOne(query);
    const userInfo = await userCollection.findOne({_id: tokeninfo.u_id});
    if (!userInfo) {
      return {
        error: 1,
        message: 'User not found'
      };
    }

    const placeCollection = await database.collection('Places');
    const placeInfo = await placeCollection.findOne({p_id: POST.location_id});
    if (!placeInfo) {
      return {
        error: 1,
        message: 'Location not found'
      };
    }

    const visitPlaceCollection = await database.collection('VisitPlace');
    CurrentTime = new Date();
    visitPlaceCollection.insertOne({
      _id: new ObjectId(),
      p_id: POST.location_id,
      u_id: userInfo._id,
      time: CurrentTime
    });

    return {
      error: 0,
    }
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function SetUserInfo(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = await database.collection('Users');
    const tokenCollection = await database.collection("Tokens");
    // const tokeninfo = tokenCollection.findOne({_id:ObjectId(POST.token)});
    const query = {token: POST.token};
    const tokeninfo = await tokenCollection.findOne(query);
    const userInfo = await userCollection.findOne({_id: tokeninfo.u_id});
    if (!userInfo) {
      return {
        error: 1,
        message: 'User not found'
      };
    }
    await userCollection.updateOne({_id: userInfo._id},
      {
        $set: {
          u_name: POST.name, u_phone: POST.phone, u_email: POST.email,
          u_addr: POST.address
        }
      });
    return {
      error: 0,
    }
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }

}

async function AppointVaccinum(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const bookVaccinationCollection = database.collection('BookVaccination');
    // const ObjectId = require('mongodb').ObjectId;

    const appointment = {
      _id: new ObjectId(),
      u_id: new ObjectId(POST.u_id),
      v_id: new ObjectId(POST.v_id),
      v_kind: POST.kind,
      p_id: new ObjectId(POST.p_id),
      time: new Date(POST.date)
    };

    const result = await bookVaccinationCollection.insertOne(appointment);

    return {
      error: 0,
      message: 'Vaccination appointment created successfully',
      appointment_id: appointment._id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function VaccinumAppointRetract(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const bookVaccinationCollection = database.collection('BookVaccination');
    // const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.appointment_id)};

    const result = await bookVaccinationCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return {
        error: 1,
        message: 'Appointment not found'
      };
    }

    return {
      error: 0,
      message: 'Appointment deleted successfully',
      appointment_id: POST.appointment_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function GetUserAll(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = database.collection('Users');
    const users = await userCollection.find({}).toArray();

    return {
      error: 0,
      message: 'Users retrieved successfully',
      users
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function SetUser(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = database.collection('Users');
    // const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.user_id)};
    const update = {
      $set: {
        u_name: POST.name,
        u_card_id: POST.card_id,
        u_phone: POST.phone,
        u_email: POST.email
      }
    };

    const result = await userCollection.updateOne(query, update);

    if (result.modifiedCount === 0) {
      return {
        error: 1,
        message: 'User not found'
      };
    }

    return {
      error: 0,
      message: 'User updated successfully',
      user_id: POST.user_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function AddUser(POST) {
  try {

    // const isValidToken = await verifyToken(POST.token);
    // if (!isValidToken) {
    //   return {
    //     error: 1,
    //     message: 'Invalid token'
    //   };
    // }

    const userCollection = database.collection('Users');

    // Create a new user object
    // const ObjectId = require('mongodb').ObjectId;
    // Create a new user object with the generated ObjectId
    const user = {
      _id: new ObjectId(),
      u_name: POST.name,
      u_card_id: POST.card_id,
      u_phone: POST.phone,
      u_email: POST.email,
      health_code: 1 // Set health_code as null initially
    };

    // Insert the user document into the collection
    const result = await userCollection.insertOne(user);

    return {
      error: 0,
      message: 'User added successfully',
      insertedId: result.insertedId
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function DeleteUser(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = database.collection('Users');
    // const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.user_id)};

    const result = await userCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return {
        error: 1,
        message: 'User not found'
      };
    }

    return {
      error: 0,
      message: 'User deleted successfully',
      user_id: POST.user_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function GetStatisticsData(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = database.collection('Users');

    const statisticsData = await userCollection.aggregate([
      {$group: {_id: "$health_code", num: {$sum: 1}}},
      {$project: {health_code: "$_id", num: 1, _id: 0}}
    ]).toArray();

    return {
      error: 0,
      message: 'Statistics data retrieved successfully',
      statisticsData
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function GetHealthCodeAll(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const userCollection = database.collection('Users');
    const projection = {_id: 0, u_name: 1, health_code: 1};

    const healthCodes = await userCollection.find({}, projection).toArray();

    return {
      error: 0,
      message: 'Health codes retrieved successfully',
      health_codes: healthCodes
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function GetHealthCode() {
  await 1;
  return 1;
}

async function SetHealthCode(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    // Assuming you have a database connection named "database" established

    const userCollection = database.collection('Users');
    // const ObjectId = require('mongodb').ObjectId;

    let userIDs;
    if (Array.isArray(POST.user_id)) {
      userIDs = POST.user_id.map((id) => new ObjectId(id));

    } else {
      userIDs = [new ObjectId(POST.user_id)];

    }
    const filter = {_id: {$in: userIDs}};
    const update = {$set: {health_code: parseInt(POST.status)}};

    const result = await userCollection.updateMany(filter, update);

    return {
      error: 0,
      message: 'Health codes updated successfully',
      modifiedCount: result.modifiedCount
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function GetVisitPlacesAll(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const visitPlaceCollection = database.collection('VisitPlace');
    const visitPlaces = await visitPlaceCollection.find().toArray();

    return {
      error: 0,
      message: 'Visit places retrieved successfully',
      visit_places: visitPlaces
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function GetVisitPlaces() {
  await 1;
  return 1;
}

async function AddVisitPlaces(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const visitPlaceCollection = database.collection('VisitPlace');
    // const ObjectId = require('mongodb').ObjectId;

    const visitRecord = {
      _id: new ObjectId(),
      u_id: new ObjectId(POST.user_id),
      p_id: new ObjectId(POST.place_id),
      time: new Date()
    };

    const result = await visitPlaceCollection.insertOne(visitRecord);

    return {
      error: 0,
      message: 'Visit place added successfully',
      visit_record_id: visitRecord._id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function DeleteVisitPlaces(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const visitPlaceCollection = database.collection('VisitPlace');
    // const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.record_id)};

    const result = await visitPlaceCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return {
        error: 1,
        message: 'Visit place record not found'
      };
    }

    return {
      error: 0,
      message: 'Visit place record deleted successfully',
      record_id: POST.record_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function GetNucleicAll(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const nucleicCollection = database.collection('Nucleic');
    const nucleicRecords = await nucleicCollection.find().toArray();

    return {
      error: 0,
      message: 'Nucleic records retrieved successfully',
      nucleic_records: nucleicRecords
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function GetVaccination() {
  await 1;
  return 1;
}

async function AddNucleic(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const nucleicCollection = database.collection('Nucleic');
    // const ObjectId = require('mongodb').ObjectId;

    const nucleicRecord = {
      _id: new ObjectId(),
      p_id: new ObjectId(POST.place_id),
      u_id: new ObjectId(POST.user_id),
      kind: POST.kind
    };

    const result = await nucleicCollection.insertOne(nucleicRecord);

    return {
      error: 0,
      message: 'Nucleic record added successfully',
      nucleic_id: nucleicRecord._id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function DeleteVaccination() {
  await 1;
  return 1;
}

async function GetPlacesAll(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const placeCollection = database.collection('Places');
    const places = await placeCollection.find().toArray();

    return {
      error: 0,
      message: 'Places retrieved successfully',
      places: places
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function GetPlaces() {
  await 1;
  return 1;
}

async function AddPlaces(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const placeCollection = database.collection('Places');
    // const ObjectId = require('mongodb').ObjectId;

    const place = {
      _id: new ObjectId(),
      p_name: POST.place_name,
      kind: POST.kind,
      p_addr: {
        latitude: parseFloat(POST.latitude),
        longitude: parseFloat(POST.longitude)
      }
    };

    const result = await placeCollection.insertOne(place);

    return {
      error: 0,
      message: 'Place added successfully',
      place_id: place._id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function DeletePlaces(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const placeCollection = database.collection('Places');
    // const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.place_id)};

    const result = await placeCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return {
        error: 1,
        message: 'Place not found'
      };
    }

    return {
      error: 0,
      message: 'Place deleted successfully',
      place_id: POST.place_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function SetPlaces(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const placeCollection = database.collection('Places');
    // const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.place_id)};

    const updateFields = {};
    if (POST.place_name) {
      updateFields.p_name = POST.place_name;
    }
    if (POST.kind) {
      updateFields.kind = POST.kind;
    }
    if (POST.place_addr) {
      updateFields.p_addr = {
        latitude: parseFloat(POST.latitude),
        longitude: parseFloat(POST.longitude)
      };
    }

    const updateResult = await placeCollection.updateOne(query, {$set: updateFields});

    if (updateResult.modifiedCount === 0) {
      return {
        error: 1,
        message: 'Place not found'
      };
    }

    return {
      error: 0,
      message: 'Place updated successfully',
      place_id: POST.place_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function GetVaccinationAll(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const vaccinationCollection = database.collection('Vaccination');
    const usersCollection = database.collection('Users');
    const placesCollection = database.collection('Places');

    const vaccinations = await vaccinationCollection.find().toArray();

    const populatedVaccinations = await Promise.all(vaccinations.map(async (vaccination) => {
      const userId = vaccination.u_id;
      const placeId = vaccination.p_id;

      const user = await usersCollection.findOne({_id: userId});
      const place = await placesCollection.findOne({_id: placeId});

      return {
        user_id: userId,
        user_name: user.u_name,
        user_card_id: user.card_id,
        place_id: placeId,
        place_name: place.p_name
      };
    }));

    return {
      error: 0,
      message: 'Vaccination records retrieved successfully',
      vaccinations: populatedVaccinations
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

// async function GetVaccinationAll(POST) {
//   try {
//     const isValidToken = await verifyToken(POST.token);
//     if (!isValidToken) {
//       return {
//         error: 1,
//         message: 'Invalid token'
//       };
//     }

//     const vaccinationCollection = database.collection('Vaccination');

//     const vaccinations = await vaccinationCollection.find().toArray();

//     return {
//       error: 0,
//       message: 'Vaccination records retrieved successfully',
//       vaccinations
//     };
//   } catch (err) {
//     return {
//       error: 1,
//       message: err.message
//     };
//   }
// }

async function GetVaccination() {
  await 1;
  return 1;
}

async function AddVaccination(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const vaccinationCollection = database.collection('Vaccination');
    // const ObjectId = require('mongodb').ObjectId;

    const vaccination = {
      _id: new ObjectId(),
      u_id: new ObjectId(POST.user_id),
      p_id: new ObjectId(POST.place_id),
      kind: POST.Vaccination_kind,
      time: new Date()
    };

    const result = await vaccinationCollection.insertOne(vaccination);

    return {
      error: 0,
      message: 'Vaccination added successfully',
      vaccination_id: vaccination._id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function DeleteVaccination(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const vaccinationCollection = database.collection('Vaccination');
    // const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.Vaccination_id)};

    const result = await vaccinationCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return {
        error: 1,
        message: 'Vaccination not found'
      };
    }

    return {
      error: 0,
      message: 'Vaccination deleted successfully',
      vaccination_id: POST.Vaccination_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function SetVaccination(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const vaccinationCollection = database.collection('Vaccination');
    const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.Vaccination_id)};

    const updateData = {
      $set: {
        Vaccination_kind: POST.Vaccination_kind,
        u_id: new ObjectId(POST.user_id),
        p_id: new ObjectId(POST.place_id),
        time: new Date()
      }
    };

    const result = await vaccinationCollection.updateOne(query, updateData);

    if (result.matchedCount === 0) {
      return {
        error: 1,
        message: 'Vaccination record not found'
      };
    }

    return {
      error: 0,
      message: 'Vaccination record updated successfully',
      Vaccination_id: POST.Vaccination_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

// async function GetNucleicAll(POST) {
//   try {
//     const isValidToken = await verifyToken(POST.token);
//     if (!isValidToken) {
//       return {
//         error: 1,
//         message: 'Invalid token'
//       };
//     }

//     const nucleicCollection = database.collection('Nucleic');
//     const nucleicRecords = await nucleicCollection.find().toArray();

//     return {
//       error: 0,
//       message: 'Nucleic records retrieved successfully',
//       nucleic_records: nucleicRecords
//     };
//   } catch (err) {
//     return {
//       error: 1,
//       message: err.message
//     };
//   }
// }

async function GetNucleicAll(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const nucleicCollection = database.collection('Nucleic');
    const nucleicRecords = await nucleicCollection.find().toArray();

    const placeCollection = database.collection('Places');
    const userCollection = database.collection('Users');

    const nucleicRecordsWithInfo = await Promise.all(nucleicRecords.map(async (record) => {
      const place = await placeCollection.findOne({_id: record.p_id});
      const user = await userCollection.findOne({_id: record.u_id});

      return {
        _id: record._id,
        p_id: record.p_id,
        place_name: place ? place.p_name : null,
        u_id: record.u_id,
        user_name: user ? user.user_name : null,
        user_card_id: user ? user.user_card_id : null
      };
    }));

    return {
      error: 0,
      message: 'Nucleic records retrieved successfully',
      nucleic_records: nucleicRecordsWithInfo
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function GetNucleic() {
  await 1;
  return 1;
}


async function SetNucleic(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const nucleicCollection = database.collection('Nucleic');
    const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.nucleic_id)};

    const updateData = {
      $set: {
        p_id: new ObjectId(POST.p_id),
        u_id: new ObjectId(POST.u_id),
        kind: POST.kind,
        time: new Date()
      }
    };

    const result = await nucleicCollection.updateOne(query, updateData);

    if (result.matchedCount === 0) {
      return {
        error: 1,
        message: 'Nucleic record not found'
      };
    }

    return {
      error: 0,
      message: 'Nucleic record updated successfully',
      nucleic_id: POST.nucleic_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function DeleteNucleic(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const nucleicCollection = database.collection('Nucleic');
    const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.nucleic_id)};

    const result = await nucleicCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return {
        error: 1,
        message: 'Nucleic record not found'
      };
    }

    return {
      error: 0,
      message: 'Nucleic record deleted successfully',
      nucleic_id: POST.nucleic_id
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function GetAdminUserAll(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const adminCollection = database.collection('Admins');
    const adminUsers = await adminCollection.find().toArray();

    return {
      error: 0,
      message: 'Admin users retrieved successfully',
      adminUsers
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function SetAdminUser(POST) {
  try {
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const adminCollection = database.collection('Admins');
    const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.admin_user_id)};
    const update = {
      $set: {
        m_card_id: POST.admin_card_id,
        m_name: POST.admin_user_name,
        m_access: POST.admin_user_access
      }
    };
    const result = await adminCollection.updateOne(query, update);

    if (result.matchedCount === 0) {
      return {
        error: 1,
        message: 'Admin user not found'
      };
    }

    return {
      error: 0,
      message: 'Admin user updated successfully'
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function AddAdminUser(POST) {
  try {
    // const { token, admin_user_name, admin_user_access } = data;

    // Verify token here (implement your token verification logic)
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const adminCollection = database.collection('Admins');
    const ObjectId = require('mongodb').ObjectId;
    const admin = {
      _id: new ObjectId(),
      m_name: POST.admin_user_name,
      m_card_id: POST.m_card_id,
      m_access: POST.admin_user_access
    };
    const result = await adminCollection.insertOne(admin);

    return {
      error: 0,
      message: 'Admin user added successfully',
      insertedId: result.insertedId
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}

async function DeleteAdminUser(POST) {
  try {
    // Verify token here (implement your token verification logic)
    const isValidToken = await verifyToken(POST.token);
    if (!isValidToken) {
      return {
        error: 1,
        message: 'Invalid token'
      };
    }

    const adminCollection = database.collection('Admins');
    // const ObjectId = require('mongodb').ObjectId;
    const query = {_id: new ObjectId(POST.admin_user_id)};
    const result = await adminCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return {
        error: 1,
        message: 'Admin user not found'
      };
    }

    return {
      error: 0,
      message: 'Admin user deleted successfully'
    };
  } catch (err) {
    return {
      error: 1,
      message: err.message
    };
  }
}


async function verifyToken(token) {
  try {
    const tokenCollection = database.collection('Tokens');
    const query = {token};

    const tokenDoc = await tokenCollection.findOne(query);
    if (tokenDoc) {
      return true; // Token found in the collection
    } else {
      return false; // Token not found in the collection
    }
  } catch (err) {
    console.error('Error verifying token:', err);
    return false; // Return false in case of an error
  }
}