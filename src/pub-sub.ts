interface Subscription {
    unsubscribe(): void
}

interface Subscriber<T> {
    update: (value: T | null) => void
}

interface Publisher<T> {
    subscribers: Subscriber<T>[];

    subscribe(subscriber: Subscriber<T>): Subscription;

    notify(value: T | null): void;
}

/**
 * An Object that represent the subscription to a Publisher
 */
class ConcreteSubscription<T> implements Subscription {
    private readonly publisher: Publisher<T> | null = null;
    private readonly subscriber: Subscriber<T> | null = null;

    constructor(publisher: Publisher<T>, subscriber: Subscriber<T>) {
        this.publisher = publisher;
        this.subscriber = subscriber;
    }

    unsubscribe() {
        if (this.publisher === null || this.subscriber === null)
            throw new Error("ConcreteSubscription: Invalid state");

        const observerIndex = this.publisher.subscribers.indexOf(this.subscriber);
        if (observerIndex === -1) {
            return console.log('ConcreteSubscription: Nonexistent subscriber.');
        }
        this.publisher.subscribers.splice(observerIndex, 1);
    }
}

/**
 * A simple publisher
 */
class ConcretePublisher<T> implements Publisher<T> {
    public subscribers: Subscriber<T>[] = [];

    public subscribe(subscriber: Subscriber<T>): Subscription {
        const isExist = this.subscribers.includes(subscriber);
        if (isExist) {
            throw new Error('Publisher: Subscriber has been subscribed already.');
        }
        this.subscribers.push(subscriber);
        return new ConcreteSubscription(this, subscriber);
    }

    public notify(value: T | null): void {
        for (const subscriber of this.subscribers) {
            subscriber.update(value);
        }
    }
}

export {Subscription, Subscriber, Publisher, ConcretePublisher, ConcreteSubscription};
