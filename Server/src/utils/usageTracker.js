// src/utils/usageTracker.js
class UsageTracker {
    constructor() {
        this.apiCalls = 0;
        this.lastReset = new Date();
    }

    trackApiCall() {
        this.apiCalls++;
        console.log(`API Call made. Total calls today: ${this.apiCalls}`);
    }

    getUsage() {
        return {
            totalCalls: this.apiCalls,
            since: this.lastReset
        };
    }

    reset() {
        this.apiCalls = 0;
        this.lastReset = new Date();
    }
}

const tracker = new UsageTracker();
module.exports = tracker;