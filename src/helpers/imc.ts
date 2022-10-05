export type Category = {
    title: string;
    color: string;
    icon: string;
    bmi: number[];
    userBmi?: number;
}

export const categories: Category[] = [
    { title: 'Anorexia', color: '#96A3AB', icon: 'down', bmi: [0, 18.59] },
    { title: 'Normal Weight', color: '#0EAD69', icon: 'up', bmi: [18.6, 24.99] },
    { title: 'Over Weight', color: '#E2B039', icon: 'down', bmi: [25, 30] },
    { title: 'Obesity', color: '#C3423F', icon: 'down', bmi: [30.01, 99] }
];
export const calculateBMI = (
    height: number,
    weight: number
) => {
    const bmi = weight / (height * height);
    for (let i in categories) {
        // anorexia
        if (bmi >= categories[i].bmi[0] && bmi <= categories[i].bmi[1]) { 
            let categoryCopy: Category = {...categories[i]};
            categoryCopy.userBmi = bmi;  
            return categoryCopy;
        } 
    }
    return null;
}
