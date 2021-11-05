let upgrades = {
    "f1": {
        category: "Fame",
        title: "Fame Multiplier",
        desc: "Increase Fame gain by ×2, compounding.",
        disp(x) { return "×" + format(this.effect(x), 0); },
        costType: "points",
        cost(x) { return EN(1500).mul(EN.pow(3, x.pow(1.2))); },
        inv(x) { return x.div(1500).logBase(3).root(1.2).floor().max(-1); },
        effect(x) { return EN.pow(2, x); },
    },
    "f1_1": {
        category: "Fame",
        title: "Fame Exponent",
        desc: "Increase Fame gain by ^+0.05, additively.",
        disp(x) { return "^" + format(this.effect(x)); },
        costType: "points",
        cost(x) { return EN(500).pow(EN.pow(1.12, x)).mul(10); },
        inv(x) { return x.div(10).logBase(500).logBase(1.12).floor().max(-1); },
        effect(x) { return EN.mul(0.05, x).add(1); },
    },
    "f1_2": {
        category: "Fame",
        title: "Fame Exponent II",
        desc: "Increase Power in Fame gain formula by ^+0.05.",
        req: ["f2", 30],
        tease: "Unlocks at Realm Level 31",
        teaseReq: ["f2", 6],
        disp(x) { return "^" + format(this.effect(x)); },
        costType: "points",
        cost(x) { return EN(1e15).pow(EN.pow(1.12, x)).mul(1e18); },
        inv(x) { return x.div(1e18).logBase(1e15).logBase(1.12).floor().max(-1); },
        effect(x) { return EN.mul(0.05, x).add(1); },
    },
    "f2": {
        category: "Realm",
        title: "Realm Level",
        desc: "Make levels slightly bigger and spawn more enemies.",
        disp(x) { return "Level " + format(x.add(1), 0); },
        costType: "points",
        cost(x) { return EN(2500).tetrate(x.div(100).add(1)); },
        inv(x) { return x.slog(2500).sub(1).mul(100).floor().max(-1); },
    },
    "f2_1": {
        category: "Realm",
        title: "Starting Power",
        desc: "Increase your Power at the start of each level by +2.",
        req: ["f2", 6],
        tease: "Unlocks at Realm Level 7",
        disp(x) { return format(this.effect(x), 0); },
        costType: "points",
        cost(x) { return EN(100000).mul(EN.pow(1.5, x)); },
        inv(x) { return x.div(100000).logBase(1.5).floor().max(-1); },
        effect(x) { return x.mul(2).add(10); },
    },
    "f2_2": {
        category: "Realm",
        title: "Enemy Growth Factor",
        desc: "Make enemies scale faster by ×+0.01.",
        req: ["f2", 30],
        tease: "Unlocks at Realm Level 31",
        teaseReq: ["f2", 6],
        max: EN(50),
        disp(x) { return "×" + format(this.effect(x).add(1)); },
        costType: "points",
        cost(x) { return EN(1e9).pow(EN.pow(1.12, x)).mul(1e24); },
        inv(x) { return x.div(1e24).logBase(1e9).logBase(1.12).floor().max(-1); },
        effect(x) { return x.mul(0.01).add(.5); },
    },
    "f2_3": {
        category: "Realm",
        title: "Loot Chance",
        desc: "Increase chances of spawning a Loot by +0.25%.",
        req: ["f2", 51],
        tease: "Unlocks at Realm Level 52",
        teaseReq: ["f2", 30],
        max: EN(40),
        disp(x) { return format(this.effect(x).mul(100)) + "%"; },
        costType: "points",
        cost(x) { return EN(1e30).pow(EN.pow(1.14, x)).mul(1e150); },
        inv(x) { return x.div(1e150).logBase(1e30).logBase(1.14).floor().max(-1); },
        effect(x) { return EN.mul(0.0025, x); },
    },
    "f3": {
        category: "Loot",
        title: "Fame to Loot",
        desc: "Increase Loot gain by ×+0.5, additively.",
        req: ["f2_3", 1],
        max: EN(998),
        disp(x) { return "×" + format(this.effect(x), 1); },
        costType: "points",
        cost(x) { return EN("e500").mul(EN.pow(1e10, x.pow(1.25))); },
        inv(x) { return x.div("e500").logBase(1e10).root(1.25).floor().max(-1); },
        effect(x) { return x.mul(0.5).add(1); },
    },
    "f3_1": {
        category: "Loot",
        title: "Fame Exp. to Loot",
        desc: "Fame Exponent multiplies Loot gain.",
        isBool: true,
        req: ["f2", 117],
        tease: "Unlocks at Realm Level 117",
        teaseReq: ["l3"],
        disp(x) { return ""; },
        costType: "points",
        cost(x) { return EN("ee13"); },
    },
    "f3_2": {
        category: "Loot",
        title: "Fame Exp. II to Loot",
        desc: "Fame Exponent II multiplies Loot gain.",
        req: ["f2", 117],
        isBool: true,
        disp(x) { return ""; },
        costType: "points",
        cost(x) { return EN("ee50"); },
    },

    
    "l1": {
        category: "Fame",
        title: "Loot to Fame",
        desc: "Increase Fame gain by ×5, before Fame Exponent.",
        max: EN(150),
        disp(x) { return "×" + format(this.effect(x), 0); },
        costType: "loot",
        cost(x) { return EN(10).mul(EN.pow(1.5, x)); },
        inv(x) { return x.div(10).logBase(1.5).floor().max(-1); },
        effect(x) { return EN.pow(5, x); },
    },
    "l1_1": {
        category: "Fame",
        title: "Loot to Fame II",
        desc: "Increase Fame gain by ^+0.01, additively.",
        max: EN(80),
        disp(x) { return "^" + format(this.effect(x)); },
        costType: "loot",
        cost(x) { return EN(1000).mul(EN.pow(2, x)); },
        inv(x) { return x.div(1000).logBase(2).floor().max(-1); },
        effect(x) { return EN.mul(0.01, x).add(1); },
    },
    "l2": {
        category: "Loot",
        title: "Loot Mutiplier",
        desc: "Increase amount of Loot that can be spawned by ×2.",
        disp(x) { return "×" + format(this.effect(x), 0); },
        costType: "loot",
        cost(x) { return EN(100).mul(EN.pow(4, x)); },
        inv(x) { return x.div(100).logBase(4).floor().max(-1); },
        effect(x) { return EN.pow(2, x); },
    },
    "l2_1": {
        category: "Loot",
        title: "Base Loot",
        desc: "Increase the base Loot modifier by +10.",
        req: ["l3"],
        disp(x) { return format(this.effect(x), 0); },
        costType: "loot",
        cost(x) { return EN(10000000).mul(EN.pow(1.25, x)); },
        inv(x) { return x.div(10000000).logBase(1.25).floor().max(-1); },
        effect(x) { return EN.mul(10, x).add(100); },
    },
    "l2_2": {
        category: "Loot",
        title: "Random Loot",
        desc: "Increase the random Loot modifier by +10.",
        req: ["l3"],
        disp(x) { return format(this.effect(x), 0); },
        costType: "loot",
        cost(x) { return EN(10000000).mul(EN.pow(1.2, x)); },
        inv(x) { return x.div(10000000).logBase(1.2).floor().max(-1); },
        effect(x) { return EN.mul(10, x).add(100); },
    },
    "l3": {
        category: "Abilities",
        title: "Safepoints",
        desc: "You start at the start of the tower instead of the level when died.",
        isBool: true,
        disp(x) { return ""; },
        costType: "loot",
        cost(x) { return EN(2500000); },
    },
    "l3_1": {
        category: "Abilities",
        title: "Absorb Bonus",
        desc: "Gain an extra ^x of enemies' Power when killed.",
        max: EN(100),
        req: ["l3"],
        disp(x) { return "^" + format(this.effect(x)); },
        costType: "loot",
        cost(x) { return EN(2500000).mul(EN.pow(1.2, x)); },
        inv(x) { return x.div(2500000).logBase(1.2).floor().max(-1); },
        effect(x) { return EN.mul(0.02, x); },
    },
    "l3_2": {
        category: "Abilities",
        title: "Enemy Absorb Factor",
        desc: "x% of Absorb Bonus affect Enemy Growth Factor.",
        max: EN(100),
        req: ["l3"],
        disp(x) { return format(this.effect(x).mul(100), 0) + "%"; },
        costType: "loot",
        cost(x) { return EN(50000000).mul(EN.pow(1.4, x)); },
        inv(x) { return x.div(50000000).logBase(1.4).floor().max(-1); },
        effect(x) { return EN.mul(0.01, x); },
    },
    "l3_3": {
        category: "Fame",
        title: "Fame Duplicator",
        desc: "^x of Loot gain multiplies your current Fame.",
        max: EN(100),
        req: ["l3"],
        disp(x) { return "^" + format(this.effect(x)); },
        costType: "loot",
        cost(x) { return EN(1e9).mul(EN.pow(1.4, x)); },
        inv(x) { return x.div(1e9).logBase(1.4).floor().max(-1); },
        effect(x) { return EN.mul(0.2, x).pow(x.max(10).sub(9.5).mul(2)); },
    },
}