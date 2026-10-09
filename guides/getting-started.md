# Getting started

Pick a goal first, then use the instructions inside that collection or upstream project. The hub organizes resources; it does not establish hardware compatibility or validate physical robot behavior.

## Models & visualization

Start with [DOBOT Atom URDF](../collections/dobot/atom-urdf) to inspect joint names, links, meshes and Xacro files. [Unitree ROS models](../collections/unitree/ros/robots) offer another entry point. Open the relevant collection README and use its ROS distribution and launch files. Confirm model paths in your workspace.

## Simulation & control

Use [Unitree ROS 2](../collections/unitree/ros2) or [DOBOT Atom ROS 2](../collections/dobot/atom-ros2) for integration examples. Check the README for middleware, message type, network and firmware requirements. For MuJoCo simulation, start from [Unitree MuJoCo](https://github.com/unitreerobotics/unitree_mujoco) and the [MuJoCo documentation](https://mujoco.readthedocs.io/).

ROS 1 collections and the Go1 SDK are legacy resources. Their dependencies differ from ROS 2 and modern humanoid SDKs. Build each collection in the workspace described by its own instructions.

## Robot learning

Explore [Isaac Lab](https://github.com/isaac-sim/IsaacLab), [Unitree RL Gym](https://github.com/unitreerobotics/unitree_rl_gym) or [LeRobot](https://github.com/huggingface/lerobot). Check the supported simulator, GPU requirements, task, robot and dataset terms in the upstream documentation. These links are discovery starting points, not claims of a tested unified pipeline.

## Vision & manipulation

[DOBOT ROS 2 Vision](../collections/dobot/ros2-vision) covers perception, hand-eye calibration and grasp examples. Its original README limits the SDK to **EG0053-01** workstations. [Magician ROS](../collections/dobot/magician-ros) is a legacy desktop-arm demo. These supporting manipulation tools are not humanoid-specific packages.

## Search the collection

The website filters title, English / Thai description, original owner and tags. Try `G1`, `Atom`, `DDS`, `URDF`, `จำลอง` or `RL`. Combine a category with the source filter, or reset filters to return to the complete directory.

## Snapshot updates

The imported collections are snapshots of the exact source commits recorded in `provenance.json`. Upstream may change independently. Review changes, compatibility and license notices before updating a snapshot.
