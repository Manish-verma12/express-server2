import * as mongoose from "mongoose";

class Database{ 
     open(mongoURI) {
        return new Promise(resolve, reject) => {
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
export default Database.open("www.bjfj.com");