import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="relative z-10 py-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <Menu className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline-glass" size="sm">
              Entrar
            </Button>
            <Button variant="cta" size="sm">
              Inscrever-se
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}