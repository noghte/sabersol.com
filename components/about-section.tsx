import Container from "./container";

export default function AboutSection() {
  return (
    <Container as="section">
      <h2 className="mt-20 mb-6 max-w-5xl font-bold leading-8 lg:leading-10">
        Yin and Yang of Machine Learning
      </h2>
      <div className="flex flex-col items-start justify-center space-y-6 text-xl text-dark lg:flex-row lg:flex-nowrap lg:justify-between lg:space-x-16 lg:space-y-0">
        <div>
          <p>
          In interpretable machine learning, Yin and Yang can refer to the balance between accuracy and interpretability. 
          Machine learning models that are highly accurate (Yang) can sometimes be complex and difficult to interpret, while models that are highly interpretable (Yin) may not always have high accuracy. 
          Finding the right balance between accuracy and interpretability is important for ensuring that machine learning models are trustworthy and can be used effectively in real-world applications. 
          Striving for a balance between accuracy and interpretability in machine learning is crucial for developing models that are both effective and transparent.
          </p>
          <br />
          <p>
          I totaly disagree with the above definition! The balance between accuracy and interpretability is irrelevant in current complex deep learning models.
          Instead of decreasing the complexity of the model, we can use the model to explain itself.
          </p>
        </div>
        {/* <div className="max-w-lg">
          <p>
            I totaly disagree with the above definition. I think that the balance between accuracy and interpretability is irrelevant in current complex deep learning models. 
           
          </p>
        </div> */}
      </div>
    </Container>
  );
}
