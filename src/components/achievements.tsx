import { Download } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export type Achievement = {
  title: string;
  description: string;
  year: string;
  fileUrl: string; // URL al archivo descargable
};

interface AchievementsProps {
  items: Achievement[];
}

export function Achievements({ items }: AchievementsProps) {
  return (
    <section id="achievements" className="py-20 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Achievements & Diplomas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <span className="text-xs text-primary">{item.year}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-fit"
                >
                  <a href={item.fileUrl} download target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}