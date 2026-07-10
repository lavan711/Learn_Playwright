function beforeSomething(target: any, propertyKey: any, descriptor: any) {
    if (!descriptor || typeof descriptor.value !== 'function') return descriptor;

    const original = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
        console.log('EAT');
        return original.apply(this, args);
    };

    return descriptor;
}

function BeforeSomeSomeThing(target: any, propertyKey: any, descriptor: any) {
    if (!descriptor || typeof descriptor.value !== 'function') return descriptor;

    const original = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
        console.log('SLEEP');
        return original.apply(this, args);
    };

    return descriptor;
}

class Dog {
    @beforeSomething
    @BeforeSomeSomeThing
    bark() {
        return 'WOOF';
    }
}

let r = new Dog().bark();
console.log(r);