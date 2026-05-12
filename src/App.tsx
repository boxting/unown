import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UnownLogo } from "@/components/UnownLogo";
import { LanguageToggle } from "@/components/LanguageToggle";
import { buildSignatureHTML } from "@/lib/signature";
import type { SignatureData } from "@/lib/signature";

function App() {
  const { t } = useTranslation();
  const [toast, setToast] = useState(false);
  const [data, setData] = useState<SignatureData>({
    name: "Enzo Lizama",
    role: "Co-founder & Software Engineer",
    phone: "+51 999 999 999",
    phoneRaw: "51999999999",
    email: "enzo.lizama@boxtinglabs.com",
    location: "Lima, PE",
    web: "boxtinglabs.com",
  });

  const update = useCallback(
    (field: keyof SignatureData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({ ...prev, [field]: e.target.value }));
    },
    [],
  );

  const labels = {
    phone: t("sigPhone"),
    email: t("sigEmail"),
    location: t("sigLocation"),
    web: t("sigWeb"),
  };

  const signatureHTML = buildSignatureHTML(data, labels);

  const copySignature = async () => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([signatureHTML], { type: "text/html" }),
          "text/plain": new Blob([signatureHTML], { type: "text/plain" }),
        }),
      ]);
    } catch {
      await navigator.clipboard.writeText(signatureHTML);
    }
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  const fields: { key: keyof SignatureData; label: string }[] = [
    { key: "name", label: t("fullName") },
    { key: "role", label: t("role") },
    { key: "phone", label: t("phone") },
    { key: "phoneRaw", label: t("phoneRaw") },
    { key: "email", label: t("email") },
    { key: "location", label: t("location") },
    { key: "web", label: t("website") },
  ];

  return (
    <div className="p-4 sm:p-8 max-w-[960px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <UnownLogo size={36} />
          <div>
            <h1 className="text-base font-semibold tracking-tight">
              {t("title")} — {t("subtitle")}
            </h1>
            <p className="text-xs text-muted-foreground">{t("description")}</p>
          </div>
        </div>
        <LanguageToggle />
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">
        {/* Form panel */}
        <Card>
          <CardContent className="p-6">
            <p className="text-[0.7rem] font-semibold tracking-widest uppercase text-muted-foreground mb-5">
              {t("yourDetails")}
            </p>

            <div className="space-y-4">
              {fields.map(({ key, label }) => (
                <div key={key} className="space-y-1.5">
                  <Label htmlFor={key} className="text-xs">
                    {label}
                  </Label>
                  <Input
                    id={key}
                    value={data[key]}
                    onChange={update(key)}
                    className="bg-muted/50 focus:bg-white"
                  />
                </div>
              ))}
            </div>

            <Button onClick={copySignature} className="w-full mt-6">
              {t("copyBtn")} ↗
            </Button>

            <div className="mt-4 p-3 bg-accent border border-primary/20 rounded-lg text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                {t("howToPaste")}
              </span>
              <br />
              {t("step1")}
              <br />
              {t("step2")}
              <br />
              {t("step3")}
              <br />
              {t("step4")}
            </div>
          </CardContent>
        </Card>

        {/* Preview panel */}
        <Card className="flex flex-col">
          <CardContent className="p-6 flex flex-col flex-1">
            <p className="text-[0.7rem] font-semibold tracking-widest uppercase text-muted-foreground mb-5">
              {t("livePreview")}
            </p>
            <div className="flex-1 bg-muted/50 rounded-lg border border-dashed border-border flex items-center justify-center p-6 min-h-[180px]">
              <div dangerouslySetInnerHTML={{ __html: signatureHTML }} />
            </div>
            <p className="mt-3 text-[0.72rem] text-muted-foreground leading-relaxed px-1">
              {t("previewNote")}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 pointer-events-none ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {t("toast")}
      </div>
    </div>
  );
}

export default App;
