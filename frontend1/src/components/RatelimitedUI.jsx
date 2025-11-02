import { AlertTriangle } from "lucide-react";
const RatelimitedUI = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-base-200 rounded-xl p-6 shadow-lg border border-base-content/10">
        
        <div className="flex items-center gap-4 mb-4">
          <AlertTriangle className="size-10 text-primary" />
          <h3 className="text-xl font-bold">Rate Limit Reached</h3>
        </div>

        <p className="text-base-content mb-1">
          You've made too many requests in a short period. Please wait a moment.
        </p>

        <p className="text-sm text-base-content/70">
          Try again in a few seconds for the best experience.
        </p>

      </div>
    </div>
  )
}

export default RatelimitedUI