const expect = require("chai").expect;
const _ = require("lodash");
const getMedian = require("../index");
const Counter = require("../counter");

describe("Это мой первый тест(не на беременность)", () => {
    describe("Тут я тестирую функцию getMedian()", () => {
        it("Тестируем обычный массив", () => {
            const testData = [1, 2, 3, 4, 5];
            const median = getMedian(testData);
            expect(median).to.be.equal(3);
        });
        it("Тестируем обычный массив с четным количеством элементов", () => {
            const testData = [1, 2, 2, 4, 4, 5];
            const median = getMedian(testData);
            expect(median).to.be.equal(3);
        });
        it("Тестируем неотсортированный массив", () => {
            const testData = [2, 3, 5, 4, 1];
            const median = getMedian(testData);
            expect(median).to.be.equal(3);
        });
        it("Тестируем большой массив", () => {
            const startNum = 0;
            const endNum = 10;
            let testData = [];
            for (let i = 0; i < 1000000; i++) {
                testData.push(_.random(startNum, endNum));
            }
            testData = testData.concat(_.fill(new Array(500000), (startNum + endNum) / 2));
            const median = getMedian(testData);
            expect(median).to.be.equal((startNum + endNum) / 2);
        });
        it("Тестируем массив с одним элементом", () => {
            const testData = [457678];
            const median = getMedian(testData);
            expect(median).to.be.equal(457678);
        });
        it("Тестируем массив с некорретными данными", () => {
            const testData = ['eto string', 'nationalization'];
            const median = getMedian(testData);
            expect(median).to.be.equal(null);
        });
        it("Тестируем пустой массив", () => {
            const testData = [];
            const median = getMedian(testData);
            expect(median).to.be.equal(null);
        });
        it("Тестируем массив с отрицательными элементами", () => {
            const startNum = -100;
            const endNum = 200;
            let testData = [];
            for (let i = 0; i < 50; i++) {
                testData.push(_.random(startNum, endNum));
            }
            testData = testData.concat(_.fill(new Array(50), (startNum + endNum) / 2));
            const median = getMedian(testData);
            expect(median).to.be.equal((startNum + endNum) / 2);
        });
    });

    const initialValue = 10;
    const counter = new Counter(initialValue);
    describe("Тестируем счётчик", () => {
        it("Увеличиваем счетчик", () => {
            counter.increase();
            expect(counter.value).to.be.equal(1 + initialValue);
        });
        it("Уменьшаем счетчик", () => {
            counter.decrease();
            expect(counter.value).to.be.equal(0 + initialValue);
        });
        it("Увеличиваем счетчик на заданное значение", () => {
            counter.increase(10);
            expect(counter.value).to.be.equal(initialValue + 10);
        });
        it("Сбросить счетчик", () => {
            counter.reset();
            expect(counter.value).to.be.equal(initialValue);
        });
    });
});