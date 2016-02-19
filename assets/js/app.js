/**
 * Created by Nadiar on 2/19/16.
 */
(function() {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Deodorant',
            price: 2.95,
            description: 'A deodorant is a substance applied to the body to prevent body odor caused by the bacterial breakdown of perspiration in armpits, feet, and other areas of the body. A subgroup of deodorants, antiperspirants, affect odor as well as prevent sweating by affecting sweat glands.',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Shampo',
            price: 4.00,
            description: 'A shampo is a hair care product, typically in the form of a viscous liquid, that is used for cleaning hair.',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Toothbrush',
            price: 3.15,
            description: 'The toothbrush is an oral hygiene instrument used to clean the teeth and gums that consists of a head of tightly clustered bristles mounted on a handle, which facilitates the cleansing of hard-to-reach areas of the mouth.',
            canPurchase: true,
            soldOut: false
        }
    ]

}());