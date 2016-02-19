/**
 * Created by Nadiar on 2/19/16.
 */
(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.product = gem;
    });

    var gem = {
        name: 'Deodorant',
        price: 2.95,
        description: 'A deodorant is a substance applied to the body to prevent body odor caused by the bacterial breakdown of perspiration in armpits, feet, and other areas of the body. A subgroup of deodorants, antiperspirants, affect odor as well as prevent sweating by affecting sweat glands.',
        canPurchase: true,
        soldOut: false
    }
}());