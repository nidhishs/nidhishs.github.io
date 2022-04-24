const projects = [
    {
        name: 'AI Shooter',
        desc: 'A Unity based shooting game where the Blue agent learns to shoot all the red targets using reinforcement learning.',
        image: './assets/images/ai_shooter_project.png',
        src: 'https://github.com/nidhishs'
    },
    {
        name: 'Sentiment Analysis',
        desc: 'A text-classification (CNN-BiLSTM) model to measure brand perception on social media platforms like Twitter with upto 82% accuracy.',
        image: './assets/images/sentavis_project.gif',
        src: 'https://github.com/nidhishs/sentiment-analysis'
    },
]

const articles = [
    {
        name: '5 SCSS Mixins to check out!',
        desc: "I talk about what mixins are, why you should use them, and share 5 of my favourite mixins that I\'ve written.",
        src: "https://dev.to/nidhishs/5-scss-mixins-to-check-out-2bkn"
    }
]

Vue.createApp({
    data() {
        return {
            projects: projects,
            articles: articles
        }
    }
}).mount('#content-wrapper')