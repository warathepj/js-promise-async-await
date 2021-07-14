// Task 1: Translate the story into code.

const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(1);
            } else {
                reject(0);
            }
        }, 2000);
    });
};

onMyBirthday(false).then((result) => {
    console.log(`I have ${result} cakes`);
});