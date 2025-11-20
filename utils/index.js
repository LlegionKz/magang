function getFlashProducts(products) {
    return products.filter(item => item.sale === true).slice(0, 8);
}

function getFeaturedProducts(products) {
    return products.filter(item => item.sale === true).slice(0, 12);
}

function totalPrice(items) {
    return items.reduce((itemAcc, item) => {
        return itemAcc += (item.price * item.qty);
    }, 0);
}

function isWishListed(productId, wishList) {
    return wishList.findIndex(product => product.id === productId) !== -1;
}

function getCompareList(items) {
    return items.slice(0, 4);
}

function searchFilter(row, search) {
    return row.title.toLowerCase().includes(search.toLowerCase()) || !search;
}

// Image helpers
function isValidImageSrc(src) {
    if (!src || typeof src !== 'string') return false;
    const s = src.trim();
    return s.startsWith('/') || s.startsWith('http://') || s.startsWith('https://');
}

function safeImageSrc(src, fallback) {
    return isValidImageSrc(src) ? src : fallback;
}

// Rating helpers
function getStarsFromCourse(course) {
    if (!course) return 0;
    // prefer explicit numeric `stars` column
    if (typeof course.stars === 'number') return Number(course.stars);
    if (course.stars && !isNaN(Number(course.stars))) return Number(course.stars);
    // fallback: compute average from reviews array
    if (Array.isArray(course.reviews) && course.reviews.length > 0) {
        const sum = course.reviews.reduce((s, r) => s + (Number(r.rating) || 0), 0);
        return Math.round((sum / course.reviews.length) * 10) / 10;
    }
    // legacy field `ratting`
    if (typeof course.ratting === 'number') return Number(course.ratting);
    if (course.ratting && !isNaN(Number(course.ratting))) return Number(course.ratting);
    return 0;
}

function formatStarsValue(v) {
    const n = Number(v) || 0;
    // show one decimal if fractional, otherwise show integer
    if (Math.abs(n - Math.round(n)) < 0.0001) return String(Math.round(n));
    return String(n.toFixed(1));
}

// short helper function
function checkLengNull(data) {
    if (data !== null) {
        return data.length > 0;
    }
    return false;
}

function isEquals(a, b) {
    if (a !== null && b !== null) {
        return a.toLowerCase() === b.toLowerCase();
    }
    return a === b
}

function minValueOne(qty) {
    if (qty < 1) {
        return 1;
    }
    return qty;
}

// filter function
function filterProductByCategory(product, selected_category) {
    if (checkLengNull(selected_category)) {
        return product.category.toLowerCase() === selected_category.toLowerCase();
    }
    return true
}

function filterProductByPrice(product, price) {
    if (checkLengNull(price)) {
        return product.price >= price[0] && product.price <= price[1];
    }
    return true
}

function filterProductByColor(product, color) {
    if (checkLengNull(color)) {
        for (var i = 0; i < product.colors.length; i++) {
            if (product.colors[i].toLowerCase() === color.toLowerCase()) {
                return true
            }
        }
        return false;
    }
    return true
}

function filterProductBySize(product, size) {
    if (checkLengNull(size)) {
        for (var i = 0; i < product.size.length; i++) {
            if (product.size[i].toLowerCase() === size.toLowerCase()) {
                return true
            }
        }
        return false;
    }
    return true
}

export {
    getFlashProducts,
    getFeaturedProducts,
    totalPrice,
    isWishListed,
    filterProductByCategory,
    filterProductByPrice,
    filterProductByColor,
    filterProductBySize,
    isEquals,
    minValueOne,
    getCompareList,
    searchFilter
    , isValidImageSrc
    , safeImageSrc
    , getStarsFromCourse
    , formatStarsValue
};