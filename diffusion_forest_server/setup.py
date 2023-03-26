from diffusers import StableDiffusionPipeline, DDPMScheduler
import torch

model_id = "runwayml/stable-diffusion-v1-5"
c_scheduler = DDPMScheduler.from_config(model_id, subfolder="scheduler")
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16, scheduler = c_scheduler)
pipe = pipe.to("cuda")

prompt = "a photo of an astronaut riding a horse on mars"
image = pipe(prompt).images[0]  
    
image.save("astronaut_rides_horse.png")