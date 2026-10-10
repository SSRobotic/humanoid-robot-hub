<p align="center"><img src="docs/assets/ssrobotics-logo.jpg" alt="SSRobotics — original logo by SSRobotic" width="240"></p>

# 🤖 Humanoid Robot Hub

<p align="center"><b>SSRobotics · Robotics Engineer &amp; Open-source Curator</b><br>Discover models, code, simulation and robot learning through connected repositories.</p>

<p align="center"><a href="https://ssrobotic.github.io/humanoid-robot-hub/">🔎 Search the Hub</a> · <a href="#-category-directories">🗂️ Browse categories</a> · <a href="guides/getting-started.md">🚀 Getting started</a> · <a href="https://github.com/SSRobotic">👤 Follow SSRobotic</a></p>

## 👋 Welcome to SSRobotics

I organize humanoid robotics resources into focused collections so you can find a useful starting point for engineering, simulation and research. This Hub connects **12 category repositories**, **8 code collections** and **47 curated resources**. Each repository links back here and credits its original sources.

ผมรวบรวมโค้ด โมเดล และเครื่องมือเกี่ยวกับ Humanoid Robotics แยกเป็น repo ตามหมวดให้ค้นหาและนำไปศึกษาต่อได้ง่าย พร้อมให้เครดิตผู้สร้างต้นฉบับ โลโก้ SSRobotics เป็นผลงานของผมเอง

## 🗂️ Category directories

| Repository | What you will find |
| --- | --- |
| [🦾 Models & URDF](https://github.com/SSRobotic/humanoid-models) | Robot descriptions, URDF / MJCF assets and model inspection resources. |
| [🌐 Simulation](https://github.com/SSRobotic/humanoid-simulation) | Physics engines, simulator integrations and humanoid simulation workflows. |
| [🧠 Robot Learning](https://github.com/SSRobotic/humanoid-robot-learning) | Reinforcement learning, imitation learning and humanoid training frameworks. |
| [⚙️ Whole-body Control](https://github.com/SSRobotic/humanoid-whole-body-control) | Dynamics, kinematics, locomotion and whole-body control references. |
| [👁️ Vision & 3D Perception](https://github.com/SSRobotic/humanoid-vision) | Camera SDKs, computer vision, point clouds and perception resources. |
| [🤏 Manipulation & Planning](https://github.com/SSRobotic/humanoid-manipulation) | Motion planning, arm integration, grasping and demonstration-based manipulation. |
| [🎮 Teleoperation](https://github.com/SSRobotic/humanoid-teleoperation) | XR teleoperation, human-to-humanoid control and demonstration collection. |
| [💾 Datasets & Demonstrations](https://github.com/SSRobotic/humanoid-datasets) | Robotics dataset catalogs, data formats and training data utilities. |
| [💬 Vision-Language-Action](https://github.com/SSRobotic/humanoid-vla) | VLA model projects, manipulation policies and humanoid embodied AI references. |
| [🔌 Hardware & SDKs](https://github.com/SSRobotic/humanoid-hardware-sdks) | Vendor SDKs, communication interfaces and platform-specific humanoid software. |
| [📡 ROS & Integration](https://github.com/SSRobotic/humanoid-ros2) | ROS / ROS 2 integration, controllers, middleware and planning tools. |
| [📚 Research & Benchmarks](https://github.com/SSRobotic/humanoid-research) | Research code, published project references and embodied AI evaluation tools. |

## 🛠️ Platform code collections

| Repository | Scope |
| --- | --- |
| [📡 Unitree ROS 2](https://github.com/SSRobotic/unitree-ros2) | ROS 2 / DDS examples and message interfaces, including G1 / H1 examples. |
| [🦾 Unitree Robot Models](https://github.com/SSRobotic/unitree-robot-models) | A1 / Aliengo / AliengoZ1 model snapshots and legacy ROS / Gazebo packages; modern humanoid models are linked upstream. |
| [🔌 Unitree Legacy SDK](https://github.com/SSRobotic/unitree-legacy-sdk) | Legacy Go1-oriented SDK collection and supporting examples. |
| [🦾 DOBOT Atom Models](https://github.com/SSRobotic/dobot-atom-models) | DOBOT Atom URDF / Xacro model and mesh collection. |
| [🔌 DOBOT Atom SDK](https://github.com/SSRobotic/dobot-atom-sdk) | DOBOT Atom C++ SDK with RPC / DDS and recording examples. |
| [📡 DOBOT Atom ROS 2](https://github.com/SSRobotic/dobot-atom-ros2) | DOBOT Atom ROS 2 model, simulation and integration collection. |
| [🤏 DOBOT Magician ROS](https://github.com/SSRobotic/dobot-magician-ros) | Legacy ROS demo for the DOBOT Magician desktop arm. |
| [👁️ DOBOT Vision & Manipulation](https://github.com/SSRobotic/dobot-vision) | RealSense / calibration / recognition examples for the EG0053-01 workstation. |

The code repositories contain the existing platform collections, with their history and license notices. The `collections/` folder here retains the original consolidated snapshots for reference; [provenance.json](provenance.json) records the source commit and current repository name.

## 🔎 Search & explore

Visit the [bilingual resource directory](https://ssrobotic.github.io/humanoid-robot-hub/). Search by robot, tool or topic and filter by one of the 12 categories. Try `G1`, `Atom`, `TienKung`, `MuJoCo`, `Teleoperation`, `VLA` or `RoboMIND`.

The site searches the curated catalog. The source links lead to the original project or dataset; dataset download / access conditions stay with the source provider.

## 🚀 Start building

1. [🦾 Inspect a model](https://github.com/SSRobotic/humanoid-models).
2. [🌐 Set up simulation](https://github.com/SSRobotic/humanoid-simulation).
3. [📡 Explore ROS integration](https://github.com/SSRobotic/humanoid-ros2) or [🔌 vendor SDKs](https://github.com/SSRobotic/humanoid-hardware-sdks).
4. Choose [🧠 robot learning](https://github.com/SSRobotic/humanoid-robot-learning), [🎮 teleoperation](https://github.com/SSRobotic/humanoid-teleoperation) or [💬 VLA](https://github.com/SSRobotic/humanoid-vla) based on your task.

## 📁 Repository map

```text
docs/                 Bilingual search site and original SSRobotics logo
guides/               Getting started and ecosystem navigation
collections/          Original consolidated source snapshots
directories/          VLA, hardware, ROS and research resource directories
catalog.json          Curated resources with source attribution
sections.json         12 category definitions
repositories.json     20 connected repositories
provenance.json       Source commits and current collection repositories
```

## 🙌 Join the open robotics community

If this collection helps your work, **[follow SSRobotic](https://github.com/SSRobotic)** for future robotics resources and **[star this Hub](https://github.com/SSRobotic/humanoid-robot-hub)** so it is easy to find again. Share useful original projects or correct a description through [Issues](https://github.com/SSRobotic/humanoid-robot-hub/issues/new/choose).

⭐ [Star the Hub](https://github.com/SSRobotic/humanoid-robot-hub) · 👤 [Follow SSRobotic](https://github.com/SSRobotic) · 💡 [Suggest a resource](https://github.com/SSRobotic/humanoid-robot-hub/issues/new/choose)

## 📚 Credits & licenses

SSRobotic curates the ecosystem, writes the navigation and builds the discovery interface. Original robot SDKs, models, datasets and frameworks belong to their respective authors. [CREDITS.md](CREDITS.md) lists source links; existing collection notices are retained. The SSRobotics logo is supplied by its creator and is not covered by the editorial MIT license. No blanket relicensing applies to third-party resources.

## 💻 Run the search site locally

```bash
git clone https://github.com/SSRobotic/humanoid-robot-hub.git
cd humanoid-robot-hub
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000`. See [CONTRIBUTING.md](CONTRIBUTING.md) for catalog updates.
