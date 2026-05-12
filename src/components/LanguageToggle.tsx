import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className="flex gap-1">
      <Button
        variant={current === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => i18n.changeLanguage("en")}
        className="text-xs px-3"
      >
        EN
      </Button>
      <Button
        variant={current === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => i18n.changeLanguage("es")}
        className="text-xs px-3"
      >
        ES
      </Button>
    </div>
  );
}
