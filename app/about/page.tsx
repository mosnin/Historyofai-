import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AI History",
  description: "Learn about our mission to document the history of artificial intelligence",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="kanye-text text-5xl md:text-7xl mb-12">
          ABOUT THIS
          <br />
          PROJECT
        </h1>

        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-muted-foreground">
            This timeline documents the remarkable journey of artificial intelligence,
            from its theoretical foundations in the 1940s to the transformative systems
            reshaping our world today.
          </p>

          <div className="border-l-4 border-foreground pl-6 py-4">
            <h2 className="text-2xl font-black uppercase mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide an accessible, comprehensive, and visually engaging chronicle of
              AI's evolution, celebrating the breakthroughs, challenges, and visionaries
              that shaped this field.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="border-2 border-border p-6 hover:border-foreground transition-colors">
              <h3 className="text-3xl font-black mb-2">30+</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                Major Milestones
              </p>
            </div>
            <div className="border-2 border-border p-6 hover:border-foreground transition-colors">
              <h3 className="text-3xl font-black mb-2">80+</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                Years Documented
              </p>
            </div>
            <div className="border-2 border-border p-6 hover:border-foreground transition-colors">
              <h3 className="text-3xl font-black mb-2">∞</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                Possibilities Ahead
              </p>
            </div>
          </div>

          <div className="py-8">
            <h2 className="text-2xl font-black uppercase mb-4">The Story</h2>
            <p className="text-muted-foreground mb-4">
              From Alan Turing's foundational question "Can machines think?" to today's
              large language models and autonomous systems, AI has evolved from theoretical
              concept to practical reality.
            </p>
            <p className="text-muted-foreground">
              This timeline captures the key moments: the Dartmouth Conference that birthed
              the field, the AI winters that tested researchers' resolve, the breakthroughs
              in neural networks and deep learning, and the recent explosion of
              transformer-based models that brought AI into mainstream consciousness.
            </p>
          </div>

          <div className="bg-card border-2 border-border p-8">
            <p className="text-center text-muted-foreground italic">
              "The question of whether a computer can think is no more interesting than
              the question of whether a submarine can swim."
            </p>
            <p className="text-center mt-4 font-bold">— Edsger W. Dijkstra</p>
          </div>
        </div>
      </div>
    </div>
  );
}
