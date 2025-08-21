import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

const CookiesBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookies-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-consent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookies-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Cookie className="h-6 w-6 text-primary flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By continuing to use our site, you consent to our use of cookies.
                </p>
                <p className="text-xs">
                  Learn more in our{" "}
                  <a href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={rejectCookies}
                className="text-xs"
              >
                Reject
              </Button>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground text-xs"
              >
                Accept All
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={rejectCookies}
                className="p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookiesBanner;
