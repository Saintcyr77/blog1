const { log } = require('console');
const fs = require('fs');

// read  files

fs.readFile('./docs/blog1.txt', (err, data) => {
    
    if (err) {
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
});

console.log("last line");



//write

fs.writeFile('./docs/blog1.txt', "Hello,world", () => {
    console.log("file written");
});

fs.writeFile('./docs/blog2.txt', "Hello,world", () => {
    console.log("file written");
});


//directories

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Folder created");
    }
})
}
else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Folder deleated");
        }
    })
}

//deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Deleated");
    })
}


