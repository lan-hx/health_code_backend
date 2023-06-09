// // Select the database to use.
use('mongodbQRCodeDB');

// //create Users table
db.createCollection("Users", {
  validator: {
     $jsonSchema: {
        bsonType: "object",
        title: "Users Validation",
        required: [ "_id", "u_name", "u_card_id", "u_email", "u_phone", "send_notification" ],
        properties: {
            _id: {bsonType: "objectId"},
            u_name: {bsonType: ["null", "string"]},
            u_card_id: {bsonType: ["null", "string"]},
            u_email: {bsonType: ["null", "string"]},
            u_phone: {bsonType: ["null", "string"]},
            u_addr: {bsonType: ["null", "string"]},
            health_code: {bsonType: "objectId"},
            health_state: {enum: ["green", "yellow", "red", "grey"]},
            send_notification:{bsonType:"int"}
        },
        additionalProperties: false,
      }
  }
} );



// // create Admins table
db.createCollection("Admins",{
  validator:{
    $jsonSchema:{
      bsonType:"object",
      title:"Admins Validation",
      required:["_id", "m_name", "m_password", "m_access"],
      properties:{
        _id: { bsonType: "objectId"},
        m_name: {bsonType: ["null", "string"]},
        m_password: {bsonType: ["null", "string"]},
        m_access: {bsonType: ["null", "string"]},
      },
      additionalProperties:false,
    }
  }
});

// create Places table
db.createCollection("Places",{
    validator:{
      $jsonSchema:{
        bsonType:"object",
        title:"Admins Validation",
        required:["_id", "p_name", "p_addr", "p_addr_string", "kind"],
        properties:{
          _id: { bsonType: "objectId"},
          p_name: {bsonType: ["null", "string"]},
          p_addr_string: {bsonType: ["null", "string"]},
          p_addr:{bsonType:"object", 
                required: ["latitude", "longitude"],
                properties:{"latitude":{bsonType:"double"}, "longitude": {bsonType:"double"}}
            },
          kind: {
            enum: ["nucleic", "vaccination", "other"]
          },
        },
        additionalProperties:false,
      }
    }
});

// create Vaccination table
db.createCollection("Vaccination",{
  validator:{
    $jsonSchema:{
      bsonType:"object",
      title:"Admins Validation",
      required:["_id", "u_id", "p_id", "kind", "time", "counter"],

      properties:{
        _id: { bsonType: "objectId"},
        
        u_id: {bsonType: "objectId"},
        
        p_id: {bsonType: "objectId"},
        
        counter: {bsonType: "int"},

        kind: {bsonType: "string"},

        time: {
          bsonType: "date",
          description: "时间"
        }
      
      },
      additionalProperties:false,
    }
  }
});


// create Nucleic table
db.createCollection("Nucleic", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "u_id", "p_id", "result"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "核酸检测的id"
        },
        u_id: {
          bsonType: "objectId",
          description: "核酸检测用户的id"
        },
        
        p_id:{
          bsonType: "objectId",  
          description:"核酸检测地点id"
        },
        // 0阴  1混阳 2单独阳 3未出结果
        result: {
          enum: ["negtive","positive_more", "positive_one", "absence"],
          description: "核酸结果"
        },

        time: {
          bsonType: "date",
          description: "时间"
        }
      },
      additionalProperties: false
    }
  }
})

// create VisitPlace table
db.createCollection("VisitPlace", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "u_id", "p_id", "time"],
      properties: {
        
        _id:{bsonType: "objectId"},

        u_id: {
          bsonType: "objectId",
          description: "用户的id"
        },
        p_id: {
          bsonType: "objectId",
          description: "地点的id"
        },
        time: {
          bsonType: "date",
          description: "时间"
        }
      },
      additionalProperties: false
    }
  }
})


// create BookVaccination table
db.createCollection("BookVaccination", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "u_id", "v_id", "v_kind", "p_id", "time"],
      properties: {
        _id:{
          bsonType: "objectId",
          description: "预约的id"
        },
        u_id: {
          bsonType: "objectId",
          description: "用户的id"
        },
        v_id: {
          bsonType: "objectId",
          description: "疫苗的id"
        },

        p_id: {
          bsonType: "objectId",
          description: "疫苗接种的地址"
        },

        time: {
          bsonType: "date",
          description: "时间"
        }
      },
      additionalProperties: false
    }
  }
})

// create Complain table
db.createCollection("Complain", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["u_id", "content", "reply"],
      properties: {
        u_id: {
          bsonType: "objectId",
          description: "用户的id"
        },
        content: {
          bsonType: ["null", "string"],
          description: "申诉的内容"
        },
        reply: {
          bsonType: ["null", "string"],
          description: "申诉的回复"
        }
      }
    },
    additionalProperties: false
  }
})

// create Tokens table
db.createCollection("Tokens",{
  validator:{
    $jsonSchema:{
      bsonType:"object",
      title:"Tokens Validation",
      required:["_id", "u_id", "time"],
      properties:{
        _id: { bsonType: "objectId"},
        u_id: {bsonType: "objectId"},
        time:{bsonType:"date"}
      },
    }  
  }
});



console.log("Database created successfully");