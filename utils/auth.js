const withAuth = (req, res, next) => {
    if (!req, res, user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;