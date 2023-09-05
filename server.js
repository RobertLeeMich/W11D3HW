const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000

//in order to render something, you have to have an engine

//This works similarly to props
const fs = require('fs') //the fs module helps us do things with our filesystem

//we are creating our own engine to read our own special kind of file
app.engine('rando', (filePath, options, callback) => { // define the view engine called portal
    //using fs.readFile for error catching, and rendering content on the page
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    //running .toString() and .replace()
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
      .replace("#footermessage#", "<footer>" + options.footer + "</footer>")
      .replace("#footermessage#", "<bottom>" + options.bottom + "</bottom>")
      //returning null, rendered tells the engine that it's done running
    return callback(null, rendered)
  })
})

// specify the views directory when we render views, so the engine knows where to look for the views
app.set("views", "./views") 
//registers the portal view engine
app.set("view engine", "rando")

app.get ("/", (req, res) => {
    res.render("maintemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
        footer: "&copy; Robert Michaud 2023, Per Scholas"
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/mainhome", (req, res) => {
    res.render("maintemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the bestest",
        message: "who",
        content: "Major Key Alert, Yall know who it is, All I do is win",
        footer: "&copy; Robert Michaud 2023, Per Scholas"
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/mainabout", (req, res) => {
    res.render("maintemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "Yall know who it is, All I do is win",
        footer: "&copy; Robert Michaud 2023, Per Scholas"
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/maincontact", (req, res) => {
    res.render("maintemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "All I do is win",
        footer: "&copy; Robert Michaud 2023, Per Scholas"
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/mainmain", (req, res) => {
    res.render("maintemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
        footer: "&copy; Robert Michaud 2023, Per Scholas"
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/mainroads", (req, res) => {
    res.render("maintemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
        footer: "&copy; Robert Michaud 2023, Per Scholas"
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/sechome", (req, res) => {
    res.render("sectemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/secabout", (req, res) => {
    res.render("sectemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
        footer: "Test Footer"
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/seccontact", (req, res) => {
    res.render("sectemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
        footer: "Test Footer"
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/secmain", (req, res) => {
    res.render("sectemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
        footer: "Test Footer"
    }) // we don't have to add .portal because we set the view engine above
})

app.get ("/secroads", (req, res) => {
    res.render("sectemp.rando", {
        //options object, in the engine, these get replaced in the template we're referencing, and the engine is directed to put in these key/value pairs into the template
        title: "we the best",
        message: "who",
        content: "We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
        footer: "Test Footer"
    }) // we don't have to add .portal because we set the view engine above
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})

