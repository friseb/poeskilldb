$(function() {
    var POESKILLDB = POESKILLDB || {};

    POESKILLDB.TypeEnum = {
        ATTACK: 1,
        SUPPORT: 18,
        SPELL: 19
    };

    POESKILLDB.GemTags = {
        0:  'AoE',
        1:  'Attack',
        2:  'Aura',
        3:  'Bow',
        4:  'Cast',
        5:  'Chaining',
        6:  'Chaos',
        7:  'Cold',
        8:  'Curse',
        9:  'Duration',
        10: 'Fire',
        11: 'Golem',
        12: 'Lightning',
        13: 'Melee',
        14: 'Mine',
        15: 'Minion',
        16: 'Movement',
        17: 'Projectile',
        18: 'Spell',
        19: 'Support',
        20: 'Totem',
        21: 'Trap',
        22: 'Trigger',
        23: 'Vaal',
        24: 'Warcry'
    };

    POESKILLDB.Gems = [];
    POESKILLDB.Gems[POESKILLDB.TypeEnum.ATTACK] = { 'something': 'test'};

    console.log(POESKILLDB.TypeEnum);
});