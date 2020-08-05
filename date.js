module.exports.getDate = function () {

    let today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    return today.toLocaleDateString('en-US', options);

}
//'module.exports' can be shortened to just 'exports.'
module.exports.getDay =
    function () {

        let today = new Date();

        let options = {
            weekday: 'long'

        };
        return today.toLocaleDateString('en-US', options);

    }


