const { string } = require("joi");
const mongoose = require("mongoose");

const booktype = new mongoose.Types({
    Name : {type : string, required : true},
    Author : {type : string, required : true},
    barcode : {type: number, required : true},
    foreword : { type : string, required : true || false},
    publication: { type: string && number, required :true},
    Acknowledgement : {type: string, required : true},
    ISBN : {type : number, required : true},
    edition : {type : number, required : true}
    
});

export default mongoose.model("Book", booktype);