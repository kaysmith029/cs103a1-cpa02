'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
    Name: String,
    Sector: String,
    Symbol: String

} );

module.exports = mongoose.model( 'Course', courseSchema );
