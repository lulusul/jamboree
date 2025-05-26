import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GenresStepProps {
  value: string[];
  onChange: (genres: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const GENRES = [
  { name: "Rock", icon: "🤘" },
  { name: "Jazz", icon: "🎷" },
  { name: "Pop", icon: "🎵" },
  { name: "Hip Hop", icon: "🎤" },
  { name: "R&B", icon: "🎼" },
  { name: "Electronic", icon: "🎹" },
];

export default function GenresStep({
  value,
  onChange,
  onNext,
  onBack,
}: GenresStepProps) {
  const toggleGenre = (genre: string) => {
    if (value.includes(genre)) {
      onChange(value.filter(g => g !== genre));
    } else {
      onChange([...value, genre]);
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl md:text-2xl font-bold">What music do you like?</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Select your favorite genres (you can add more later)
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-3 sm:grid-cols-3">
        {GENRES.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => toggleGenre(name)}
            className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
              value.includes(name)
                ? "border-[#ffac6d] bg-[#fff5eb]"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-xl md:text-2xl mb-1 md:mb-2">{icon}</div>
            <div className="text-xs md:text-sm font-medium">{name}</div>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <Button
          onClick={onBack}
          variant="ghost"
          className="text-sm md:text-base"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={onNext}
          className="bg-[#ffac6d] hover:bg-[#fdc193] text-black text-sm md:text-base"
          disabled={value.length === 0}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 