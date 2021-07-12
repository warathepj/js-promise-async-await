// Task 1: Translate the story into code.

const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        if (isKayoSick) {
            reject("I'm sick, I can't do this!");
        } else {
            resolve("Happy birthday, my friend!");
        }
    }
}