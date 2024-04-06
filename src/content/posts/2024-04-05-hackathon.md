---
title: Hackathon
publicationDate: 2024-04-05
description: In which a sleep deprived developer discusses a hackathon.
author: Nick Telsan
tags: [musings, code]
---

# Hackathon

[My company](https://www.viget.com) does a thing every year called [Pointless Corp](https://pointlesscorp.com/) where we build things - quick and dirty products. I think there have a been a few diamonds, but most of what I've seen in the past few years has been more about experimenting and showing that we _can_ do things rather than doing things.

An agency has the same problem as a contractor - it's not always simple to show off _what_ you have done. We've done some case studies and we can link to some projects, but there's a lot that we can't show - especially code.

Code isn't a trade secret and everyone needs to accept that, but that's a different blog post.

Of all the projects I've worked on at Viget, only one of them has been turned into a case study - and that was nearly 4 years ago!

So, Pointless is building like this blog. Building a portfolio, attracting interest, networking. All that.

All of that rambling was to say that this year, I actually participated. We built an internal thing, so you can't really see our deployed version, but hopefully we'll be able to make the repo public soon. Even if we don't, it will be added to Pointless Corp soon.

So, how did it go?

## TL;DR - Pretty Well

The idea was basically to make an app that can parse through messages in a Slack channel, get some info from the message, and then use a large-language model to summarize the message.

We have a total of six devs, which is a lot, working on this for roughly 2 work days - somewhere between 12 to 24 hours a person.

The stack was interesting. [Laravel](https://laravel.com/) as a backend, [Remix](https://remix.run/) as a frontend, [TypeSpec](https://typespec.io/) for creating an OpenAPI schema. Laravel and TypeSpec were completely new to me. Remix isn't _new_ to me, but I definitely have less experience with it than Next.

On the LLM side, we used Gemini, but ultimately swapped to ChatGPT for some better JSON responses. Mostly, we had no idea how much we would need the LLM, and Gemini was cheaper. Ultimately, ChatGPT produced better JSON responses, so we swapped to that.

As of 5 o'clock when I signed off from work for the weekend, we were on the verge of fully (albeit manually) integrating with Slack and the LLM. The last tasks to be successful were just to write some kind of jobs to regularly fetch messages from Slack and process them.

I'm very tired, but honestly, pretty happy with how well I did in this project. That might seem a bit vain, but 1) you're on my blog, what did you expect? and 2) I'm the only thing I can control.

## Speaking of Control

I felt pretty bossy and prescriptive on the project. We had six devs, and, with the exception of our development director, I don't think most people cared about what we built or how we built it.

So when it came time to make decisions, I just made them. I opened the floor for discussion, but it wasn't received. So I just kinda ran with it.

I set up the repo - we did actually decide on Laravel and Remix together - and just did a lot of it my way. I think it was alright.

I went with a Docker-first approach. No need to have PHP installed - potentially no need to have Node installed! `bin` scripts for most things, basic linting / formatting / testing GitHub workflows. Honestly, it was my dream set up.

Aside from one thing - I waffled on using something like [Turbo Repo](https://turbo.build/) or [Nx](https://nx.dev/), and didn't have time to set up those monorepo tasks appropriately.

On the one hand, it would have been nice to have dependent scripts. On the other hand, we had a bunch of unknowns and building a monorepo might have made a tangled web very quickly.

Ultimately, everyone seemed to be working fine to great with what I set up. I think there were some curve balls with OpenAPI-generated types and CI, but no one complained or changed my set up aside from minor tweaks as we added new parts. I hope it wasn't too bad or over engineered.

## The Bumps

Like I said, no one really gave me any input into tooling on Remix - I don't think anyone cared - but it did have some repercussions.

I basically built out the frontend myself. This was probably smart because I can move real fast in React whereas most of the other devs don't have much experience in React, and definitely not in serve rendered React.

However, soooo much of what was needed on the frontend was locked in my head, and my choice of trying [Panda CSS](https://panda-css.com/) did make it even harder for the other devs to get productive.

About halfway through, another dev was looking for some UI work, so I pointed him in the right direction. He did fine - it was hacky, but fine. But I did end up taking his mostly-failing PR and redo a bunch of stuff - mostly TypeScript stuff. Honestly, this probably wasn't the project deep TypeScript learning, but I also worry that I come off as unapproachable. We should have paired on it.

We also never fully embraced the schema-first API design. At some point, we needed to adjust some endpoints. The blinders came on everyone and they just started hacking - it was wrong. And I felt real bad when I had to say, "stop, do the schema first". And I felt worse when I had to do that again in the PR before it got merged. And then I felt bad a third time when I had to go update the schema after it wasn't done correctly.

This type of app wasn't right for the schema-first approach, but we wanted to experiment and try it out. OpenAPI isn't new to Viget, but using it as a contract between the frontend and backend is. When things need to change, people want to move fast, and that extra step can feel like it's in the way.

I also don't know think TypeSpec is any better than just grabbing a reasonable YML editor and building your schema that way. I'll try it on something else soon. Still a fan of [openapi-typescript](https://openapi-ts.pages.dev/) and the related `fetch` package.

Either way, we got stuff done, so I guess I wasn't too bad.

## ADHD, Hacking, and Imposter Syndrome

[Last year, I wrote an article about being a dev with ADHD](https://www.viget.com/articles/thriving-as-a-developer-with-adhd/). I have mixed feelings about that post now, but it's out there forever.

ADHD isn't a superpower, but hyperfocus can be really helpful. A combination of deadlines, societal pressure to succeed, and caffeine can turn me into a coding machine.

Is that code good? Well, it's always getting better.

Is it worse than the code I would write if I took my time? Probably, but it's definitely more practical.

Anyways, turns out that hackathons break my brain. I slept for about 9 hours over the past three days. In fact, I'm writing this post having not yet slept or napped. Will this make any sense after I do a `git push`? Only time will tell.

In previous years, part of the reason why I didn't participate in Pointless Corp because I was worried I wouldn't be able to cut it with the rest of the devs. Unfortunately, working nonstop for three days does not fix that. I _think_ I got a lot done, but the app was only five, relatively similar pages, and that took me about 40 hours to do.

And that pushes my ADHD-powered stress even further. I'm real worried that Monday is going to come and I'm going to be dead to the world. And yet... I would like to do more this weekend.

## So What's the Conclusion?

Gosh, I don't honestly know.

Docker-first worked pretty well. Would love to get git hooks and the like all Docker-ed up as well.

I feel bossy and grumpy like 90% of the time.

TypeSpec seemed fine, but not much better than just writing YML. OpenAPI + TypeScript is still amazing.

Remix is pretty fun; Laravel is pretty powerful. I'm excited to explore both more!

Hackathons break my brain.

Will I do this again next year? Honestly - depends on the projects. I don't want to do a repeat of the past three days (ya boi needs sleep), but it was pretty fun.
