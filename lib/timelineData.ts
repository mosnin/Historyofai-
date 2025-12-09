export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const timelineData: TimelineEvent[] = [
  {
    year: "1943",
    title: "McCulloch-Pitts Neuron",
    description: "Warren McCulloch and Walter Pitts created a computational model for neural networks based on mathematics and algorithms, laying the foundation for artificial neural networks and the field of AI.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    tags: ["Theory", "Foundation"]
  },
  {
    year: "1950",
    title: "Turing Test Proposed",
    description: "Alan Turing published 'Computing Machinery and Intelligence,' proposing the famous Turing Test as a criterion of intelligence. This paper became a foundational text in AI philosophy and sparked decades of debate about machine consciousness.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    tags: ["Theory", "Philosophy"]
  },
  {
    year: "1956",
    title: "Dartmouth Conference",
    description: "John McCarthy organized the Dartmouth Summer Research Project on Artificial Intelligence, officially coining the term 'Artificial Intelligence' and establishing AI as an academic field. This workshop is considered the birth of AI as a discipline.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    tags: ["Foundation", "Milestone"]
  },
  {
    year: "1958",
    title: "Perceptron Algorithm",
    description: "Frank Rosenblatt invented the Perceptron, the first artificial neural network capable of learning. This breakthrough demonstrated that machines could learn from experience, inspiring decades of neural network research.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    tags: ["Algorithm", "Breakthrough"]
  },
  {
    year: "1966",
    title: "ELIZA Chatbot",
    description: "Joseph Weizenbaum created ELIZA, the first chatbot that could simulate human conversation. Despite its simplicity, ELIZA demonstrated the potential for natural language processing and sparked discussions about human-computer interaction.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    tags: ["NLP", "Product"]
  },
  {
    year: "1974-1980",
    title: "First AI Winter",
    description: "Due to unmet expectations and funding cuts, AI research entered its first 'winter.' The limitations of early neural networks became apparent, leading to reduced government funding and a shift away from neural network research.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=600&fit=crop",
    tags: ["History", "Challenge"]
  },
  {
    year: "1986",
    title: "Backpropagation Popularized",
    description: "David Rumelhart, Geoffrey Hinton, and Ronald Williams popularized the backpropagation algorithm for training multi-layer neural networks. This breakthrough reignited interest in neural networks and became the foundation for modern deep learning.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    tags: ["Algorithm", "Breakthrough"]
  },
  {
    year: "1997",
    title: "Deep Blue Defeats Kasparov",
    description: "IBM's Deep Blue became the first computer to defeat world chess champion Garry Kasparov in a six-game match. This historic victory demonstrated that machines could outperform humans in complex strategic games.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop",
    tags: ["Hardware", "Milestone"]
  },
  {
    year: "1998",
    title: "MNIST Database Released",
    description: "Yann LeCun and colleagues released the MNIST database of handwritten digits, which became the standard benchmark for testing machine learning algorithms and played a crucial role in advancing computer vision.",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=600&fit=crop",
    tags: ["Dataset", "Computer Vision"]
  },
  {
    year: "2006",
    title: "Deep Learning Renaissance",
    description: "Geoffrey Hinton and colleagues introduced deep belief networks and the term 'deep learning,' showing that neural networks with many layers could be effectively trained. This sparked the modern deep learning revolution.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Breakthrough", "Theory"]
  },
  {
    year: "2011",
    title: "IBM Watson Wins Jeopardy!",
    description: "IBM's Watson defeated Jeopardy! champions Brad Rutter and Ken Jennings, showcasing advanced natural language processing, information retrieval, and knowledge representation capabilities.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    tags: ["NLP", "Product"]
  },
  {
    year: "2012",
    title: "AlexNet and ImageNet Moment",
    description: "Alex Krizhevsky's AlexNet won the ImageNet competition by a landslide using deep convolutional neural networks and GPUs. This victory marked the beginning of the deep learning era and revolutionized computer vision.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    tags: ["Computer Vision", "Breakthrough"]
  },
  {
    year: "2014",
    title: "Generative Adversarial Networks",
    description: "Ian Goodfellow introduced GANs, a revolutionary architecture where two neural networks compete to generate realistic synthetic data. GANs opened new possibilities for image generation, art, and creativity.",
    image: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?w=800&h=600&fit=crop",
    tags: ["Architecture", "Breakthrough"]
  },
  {
    year: "2016",
    title: "AlphaGo Defeats Lee Sedol",
    description: "DeepMind's AlphaGo defeated world champion Go player Lee Sedol 4-1, mastering a game thought to be beyond machine capability for decades. The system combined deep learning with Monte Carlo tree search.",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&h=600&fit=crop",
    tags: ["Reinforcement Learning", "Milestone"]
  },
  {
    year: "2017",
    title: "Transformer Architecture",
    description: "Google researchers introduced the Transformer in 'Attention Is All You Need,' replacing recurrent layers with self-attention mechanisms. This architecture became the foundation for GPT, BERT, and modern large language models.",
    image: "https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=800&h=600&fit=crop",
    tags: ["Architecture", "Breakthrough"]
  },
  {
    year: "2018",
    title: "GPT-1 Released",
    description: "OpenAI released the first Generative Pre-trained Transformer (GPT-1), demonstrating that language models could be pre-trained on massive text corpora and fine-tuned for specific tasks, pioneering the modern LLM paradigm.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["NLP", "Language Models"]
  },
  {
    year: "2019",
    title: "GPT-2 - 'Too Dangerous to Release'",
    description: "OpenAI released GPT-2 (1.5B parameters) in stages due to concerns about misuse. The model's ability to generate coherent long-form text sparked debates about AI safety and responsible AI development.",
    image: "https://images.unsplash.com/photo-1676277791608-ac52e54d7ccb?w=800&h=600&fit=crop",
    tags: ["Language Models", "Ethics"]
  },
  {
    year: "2020",
    title: "GPT-3 - 175 Billion Parameters",
    description: "OpenAI's GPT-3 with 175 billion parameters demonstrated remarkable few-shot learning capabilities. Its ability to perform tasks with minimal examples revolutionized how we think about AI capabilities and sparked the foundation model era.",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=600&fit=crop",
    tags: ["Language Models", "Breakthrough"]
  },
  {
    year: "2021",
    title: "AlphaFold 2 Solves Protein Folding",
    description: "DeepMind's AlphaFold 2 achieved breakthrough accuracy in predicting protein structures, solving a 50-year-old grand challenge in biology. This demonstrated AI's potential to accelerate scientific discovery across disciplines.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=600&fit=crop",
    tags: ["Science", "Breakthrough"]
  },
  {
    year: "2021",
    title: "GitHub Copilot Launched",
    description: "GitHub and OpenAI launched Copilot, an AI pair programmer powered by OpenAI Codex. This tool demonstrated practical applications of large language models in software development, transforming how developers write code.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
    tags: ["Product", "Code Generation"]
  },
  {
    year: "2022",
    title: "DALL-E 2 Transforms Image Generation",
    description: "OpenAI released DALL-E 2, capable of creating realistic images from text descriptions with unprecedented quality. This breakthrough made AI-generated art accessible and sparked creativity across industries.",
    image: "https://images.unsplash.com/photo-1686191128892-c15d675e5b56?w=800&h=600&fit=crop",
    tags: ["Computer Vision", "Product"]
  },
  {
    year: "2022",
    title: "Stable Diffusion Goes Open Source",
    description: "Stability AI released Stable Diffusion, an open-source text-to-image model that democratized AI art generation. Its release sparked an explosion of creative applications and community innovations.",
    image: "https://images.unsplash.com/photo-1686191128892-c15d675e5b56?w=800&h=600&fit=crop",
    tags: ["Computer Vision", "Open Source"]
  },
  {
    year: "2022",
    title: "ChatGPT Launches",
    description: "OpenAI released ChatGPT, bringing conversational AI to mainstream audiences. Within 5 days, it reached 1 million users, becoming the fastest-growing consumer application in history and igniting global AI adoption.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Product", "Milestone"]
  },
  {
    year: "2023",
    title: "GPT-4 - Multimodal Capabilities",
    description: "OpenAI released GPT-4, a large multimodal model accepting image and text inputs. It demonstrated human-level performance on various professional and academic benchmarks, including passing the bar exam in the top 10%.",
    image: "https://images.unsplash.com/photo-1675557009804-d5d8b3d7d856?w=800&h=600&fit=crop",
    tags: ["Language Models", "Multimodal"]
  },
  {
    year: "2023",
    title: "Claude - Constitutional AI",
    description: "Anthropic released Claude, featuring Constitutional AI for improved safety and helpfulness. Claude introduced innovative approaches to AI alignment, including the ability to explain its reasoning and refuse harmful requests.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Language Models", "Safety"]
  },
  {
    year: "2023",
    title: "Open Source LLM Explosion",
    description: "Meta released LLaMA, Mistral AI emerged with efficient models, and the community created thousands of fine-tuned variants. This democratization of large language models accelerated innovation and made AI more accessible.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    tags: ["Open Source", "Language Models"]
  },
  {
    year: "2024",
    title: "Claude 3 Family",
    description: "Anthropic released Claude 3 (Opus, Sonnet, Haiku), with Claude 3 Opus setting new benchmarks on graduate-level reasoning, mathematics, and coding. The models demonstrated enhanced vision capabilities and longer context windows.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Language Models", "Breakthrough"]
  },
  {
    year: "2024",
    title: "Sora - Video Generation",
    description: "OpenAI previewed Sora, a text-to-video model capable of generating realistic and imaginative video scenes up to a minute long. This breakthrough demonstrated AI's expanding capabilities in understanding and simulating physical worlds.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
    tags: ["Computer Vision", "Video"]
  },
  {
    year: "2024",
    title: "Gemini 1.5 - Million Token Context",
    description: "Google DeepMind released Gemini 1.5 with a groundbreaking 1 million token context window, enabling analysis of hours of video, lengthy codebases, and massive documents in a single prompt.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    tags: ["Language Models", "Multimodal"]
  },
  {
    year: "2024-2025",
    title: "The AI Agent Era",
    description: "AI systems evolved from chatbots to autonomous agents capable of using tools, browsing the web, writing and executing code, and completing complex multi-step tasks. This shift marked the transition from AI assistants to AI coworkers.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Agents", "Future"]
  },
  {
    year: "2025",
    title: "The Present - AI in Everything",
    description: "AI has become deeply integrated into daily life: from coding assistants and design tools to scientific research and healthcare. We stand at the frontier of artificial general intelligence, with AI systems demonstrating increasingly sophisticated reasoning and problem-solving abilities.",
    image: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?w=800&h=600&fit=crop",
    tags: ["Present", "Future"]
  }
];
