/* Filters */
angular.module('snowWhite.filters', [])
.filter('removeWsLowercase', function () {
    return function (text) {
        var str = text.replace(/\s+/g, '');
        return str.toLowerCase();
    };
})
.filter('mask', function () {
    return function (text, cc) {
        if (!angular.isDefined(text)) {
            return text;
        }
        var len = text.length;
        var str = "•";
        if (cc) { len = len - 4; }
        for (var i = 1; i < len; i++) {
            str += "•";
        }
        if (cc) {
            str += text.slice(-4);
        }
        return str;
    };
})
.filter('distType', function ($translate) {
    return function (text) {
        if (text === "pc") { return $translate("summary_dist_type_pc"); }
        else { return $translate("summary_dist_type_fp"); }
    };
})

.filter('lastdigits', function () {
    return function (tel) {
        if (!tel) { return ''; }
        var value = tel.toString().trim().replace(/^\+/, '');
        if (value.match(/[^0-9]/)) {
            return tel;
        }
        lastDigits = value.slice(value.length - 4);
        return (" " + lastDigits).trim();
    };
})
.filter('Paginate', ['$filter', function ($filter) {
    return function (input, current_page, page_size) {
        if (input) {
            return $filter('limitTo')(input.slice(current_page * page_size), page_size);
        }
    };
}])
.filter('customdate', function () {
    return function (input) {
        if (angular.isDefined(input)) {
            if (input.length >= 10) {
                input = input.slice(0, 10);
                input = input.slice(0, 4) + '/' + input.slice(5, 7) + '/' + input.slice(8, 10);
            }
        }
        return input;
    };
})

.filter('customdateMili', function () {
    return function (input) {
        var dateString = input + '';
        var date = new Date(parseInt(dateString.substr(6), 10));
        //date.setHours(date.getHours() - 4);
        //date.setMinutes(date.getMinutes() - 55);
        return date;
    };
})


.filter('removeWsLowercase', function () {
    return function (text) {
        var str = text.replace(/\s+/g, '');
        return str.toLowerCase();
    };
})

.filter('mask', function () {
    return function (text, cc) {
        if (!angular.isDefined(text)) {
            return text;
        }
        var len = text.length;
        var str = "•";

        if (cc) { len = len - 4; }

        for (var i = 1; i < len; i++) {
            str += "•";
        }

        if (cc) {
            str += text.slice(-4);
        }
        return str;
    };
})

.filter('distType', function ($translate) {
    return function (text) {
        if (text === "pc") { return $translate("summary_dist_type_pc"); }
        else { return $translate("summary_dist_type_fp"); }
    };
})

.filter('lastdigits', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }
        lastDigits = value.slice(value.length - 4);
        return (" " + lastDigits).trim();
    };
})

;