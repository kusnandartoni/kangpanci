"use strict"; 

var productFactory = angular.module('productFactory', []);

productFactory.factory('productFactory', function () {

    var productFactory = {};

    productFactory.products = [
        {
            productId: 1,
            name: "Product1",
            category: "Tennis",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "placeholder1.png;placeholder2.png;placeholder3.png",
            price: 30,
            qty: 6,
            variation: ""
        },
        {
            productId: 2,
            name: "Product2",
            category: "Running",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "placeholder1.png;placeholder2.png;placeholder3.png",
            price: 40,
            qty: 10,
            variation: "6,7,8,9,10,11,12"
        },
        {
            productId: 3,
            name: "Product3",
            category: "Training & Gym",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "placeholder1.png;placeholder2.png;placeholder3.png",
            price: 55,
            qty: 0,
            variation: "7,8,9,10,11"
        },
        {
            productId: 4,
            name: "Product4",
            category: "Running",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "placeholder1.png;placeholder2.png;placeholder3.png",
            price: 30,
            qty: 6,
            variation: "8,9,10,11"
        },
        {
            productId: 5,
            name: "Product5",
            category: "Training & Gym",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "placeholder1.png;placeholder2.png;placeholder3.png",
            price: 40,
            qty: 10,
            variation: "6,7,8,9,10,11,12"
        },
        {
            productId: 6,
            name: "Product6",
            category: "Tennis",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "placeholder1.png;placeholder2.png;placeholder3.png",
            price: 55,
            qty: 0,
            variation: "7,8,9,10,11"
        }
    ];

    return productFactory;
});