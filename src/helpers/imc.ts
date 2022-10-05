export type Category = {
    title: string;
    color: string;
    icon: string;
    bmi: Array<number>;
    userBmi?: number;
}

export const categories: Category[] = [
    { title: 'Anorexia', color: '#96A3AB', icon: 'down', bmi: [0, 18.5] },
    { title: 'Normal Weight', color: '#0EAD69', icon: 'up', bmi: [18.6, 24.9] },
    { title: 'Over Weight', color: 'E2B039', icon: 'down', bmi: [25, 30] },
    { title: 'Obesity', color: 'C3423F', icon: 'down', bmi: [30.1, 99] }
];
export const calculateBMI = (
    height: number,
    weight: number
) => {
    const bmi = weight / (height * height);
    for (let i in categories) {
        // anorexia
        if (bmi >= categories[i].bmi[0] && bmi < categories[i].bmi[1]) {
            alert('anorexia');    
            return categories[i].userBmi = bmi;
        } 
        // normal
        if (bmi >= categories[i].bmi[1] && bmi < categories[i].bmi[2]) {
            alert('normal');
            return categories[i].userBmi = bmi;
        }
        // over weight
        if (bmi >= categories[i].bmi[2] && bmi < categories[i].bmi[3]) {
            alert('overweight');
            return categories[i].userBmi = bmi;
        }
        // obesity
        else {
            alert('obesity');
            return categories[i].userBmi = bmi;
        }
    }
}
