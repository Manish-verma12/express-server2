import { rejects } from "assert";
import * as mongoose from "mongoose";
import { resolve } from "path/posix";
import seedData from "./seedData";

class Database{ 
     open(mongoURI) {
        return new Promise((resolve, reject) => {
            mongoose.connect(mongoURI, (err) => {
                if (err) {
                    console.log("Error", err);
                    return reject(err);

                }
                console.log("Successfully connected to database", mongoURI);
                return resolve("success");
            });
        }
     }
}

export default Database.open("www.abcd.com");

console.log('mongoUri', mongoUri);
mongoose.connect(mongoUri, option, (err) =>{
    if(err){
        console.log('err', err);

        return rejects(err);
    }

     console.log('connected to mongo successfully');
     seedData();
     resolve(true);
});
mongoose.connect.toString('error', ()=>{
    throw new Error('unable to connect to database: ${mongoUri});
});

});


}

public static close(){
    mongoose.disconnect();
}
}