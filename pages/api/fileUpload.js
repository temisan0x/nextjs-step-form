import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false,
        sizeLimit: '1mb',
    },
};

function middleware(req, res) {
    console.log('hello');
    const regex = new RegExp('/^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$/')
    return new Promise((resolve, reject) => {
        if(!req.headers['auth-token'] || regex.test(req.headers['auth-token'].slice(0,9))) reject(req)
        // console.log(req.headers['auth-token'].slice(0,10));
        // reject(req)
        return resolve(req)
    })
}

export default async (req, res) => {
    await middleware(req,res);
    const form = new formidable.IncomingForm();
    form.uploadDir = "./public/upload";
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
    });
};