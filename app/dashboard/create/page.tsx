import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogroute() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>
          Create a new post to share with the world!!!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Content</Label>
            <Textarea />            
          </div>
          <div className="flex flex-col gap-2">
            <Label>Image URL</Label>
            <Input />            
          </div>
          <Button>Create Post</Button>
        </form>
      </CardContent>
    </Card>
  );
}